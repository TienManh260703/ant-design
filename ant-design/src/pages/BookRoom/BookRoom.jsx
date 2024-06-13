import {
  Input,
  Row,
  Col,
  Button,
  Checkbox,
  DatePicker,
  Radio,
  Select,
} from "antd";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { createProduct } from "../../service/bookRoomService";
const { RangePicker } = DatePicker;
function BookRoom() {
  const [data, setData] = useState({});
  const options = [
    {
      value: "1",
      label: "1 Giường cơ bản",
    },
    {
      value: "2",
      label: "2 Giường cơ bản",
    },
    {
      value: "3",
      label: "1 Giường VIP",
    },
    {
      value: "4",
      label: "2 Giương VIP",
    },
    {
      value: "5",
      label: "2 Giường View Biển",
    },
    {
      value: "6",
      label: "2 Giường View Biển Quảng Cáo",
    },
  ];

  const handleChangeInput = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const object = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(object);
  };
  // console.log(data);
  const handleChangeCheckbox = (e) => {
    // console.log(e);
    const object = {
      ...data,
      services: e,
    };
    setData(object);
  };

  const handleChangeRadio = (e) => {
    const object = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(object);
  };

  const handleChangeDate = (dates, dateStrings) => {
    // console.log(dates);
    console.log(dateStrings[0]);
    const object = {
      ...data,
      start_day: dateStrings[0],
      end_date: dateStrings[1],
    };
    setData(object);
  };

  const handleChangeSelect = (e) => {
    // console.log(e);
    const object = {
      ...data,
      kind_of_room: parseInt(e),
    };
    setData(object);
  };
  const handleSubmit = async () => {
    // console.log(data);
    const reponse = await createProduct(data);
    // console.log("submit data json-server : ", reponse);
    if (reponse) {
      alert("Chúc mừng bạn đăt đặt phòng thành công");
    } else {
      alert("Đặt phòng thất bại :(((");
    }
  };
  return (
    <>
      <h2>Đặt phòng</h2>
      <Row gutter={[20, 20]}>
        <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <p>Họ tên</p>
          <Input
            name="full_name"
            placeholder="VD : Nguyễn Văn A"
            defaultValue={""}
            allowClear={true}
            prefix={<UserOutlined />}
            // status="error"
            onChange={handleChangeInput}
          />
        </Col>
        <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <p>Số điện thoại</p>
          <Input
            name="phone"
            placeholder="VD : 987654321"
            minLength={9}
            maxLength={9}
            addonBefore="+84"
            showCount={true}
            allowClear={true}
            // status="warning"
            onChange={handleChangeInput}
          />
        </Col>
        <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <p>Email</p>
          <Input
            name="email"
            placeholder="VD : jon@gmail.com"
            defaultValue={""}
            maxLength={50}
            allowClear={true}
            addonAfter=".com"
            onChange={handleChangeInput}
          />
        </Col>
        <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <p>Tuổi</p>
          <Input
            name="age"
            placeholder="VD : Tuổi của bạn"
            defaultValue={""}
            maxLength={50}
            type="number"
            allowClear={true}
            suffix={<UserOutlined />}
            onChange={handleChangeInput}
          />
        </Col>
        <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <p>Dịch vụ thêm</p>
          <Checkbox.Group onChange={handleChangeCheckbox}>
            {/* <Space direction="vertical"> */}
            {/* Cho nằm dọc : vertical */}
            <Checkbox value={"Thuê xe"}>Thuê Xe máy</Checkbox>
            <Checkbox value={"Khác"}> Thuê Ô tô</Checkbox>
            <Checkbox value={"Ăn trưa"}>Ăn trưa</Checkbox>
            <Checkbox value={"Chèo thuyền"}>Chèo thuyền</Checkbox>
            {/* </Space> */}
          </Checkbox.Group>
        </Col>
        <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <p>Chọn ngày</p>
          <RangePicker
            showTime={true}
            placeholder={["Ngày đến", "Ngày đi"]}
            format={"YYYY-MM-DDTHH:mm:ss"}
            onChange={handleChangeDate}
          />
        </Col>
        <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <p>Quà tặng</p>
          <Radio.Group name="gift" onChange={handleChangeRadio}>
            <Radio checked={true} value={"Áo"}>
              Áo
            </Radio>
            <Radio value={"Mũ"}> Mũ</Radio>
            <Radio value={"Kem chống nắng"}>Kem chống nắng</Radio>
            <Radio value={"Dép"}>Dép </Radio>
          </Radio.Group>
        </Col>
        <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <p>Loại phòng</p>
          <Select
            options={options}
            style={{ width: 200 }}
            placeholder="Chọn cái gì đây"
            onChange={handleChangeSelect}
          ></Select>
        </Col>
        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
          <Button type="primary" onClick={handleSubmit}>
            Đặt phòng
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default BookRoom;
