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
const { RangePicker } = DatePicker;
function BookRoom() {
  const [data, setData] = useState({});
  const options = [
    {
      value: "1",
      label: "Not Identified",
    },
    {
      value: "2",
      label: "Closed",
    },
    {
      value: "3",
      label: "Communicated",
    },
    {
      value: "4",
      label: "Identified",
    },
    {
      value: "5",
      label: "Resolved",
    },
    {
      value: "6",
      label: "Cancelled",
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
    // console.log(dateStrings);
    const object = {
      ...data,
      date: dateStrings,
    };
    setData(object);
  };

  const handleChangeSelect = (e) => {
    // console.log(e);
    const object = {
      ...data,
      kind_of_room: e,
    };
    setData(object);
  };
  const handleSubmit = () => {
    console.log("submit data json-server : ", data);
  };
  return (
    <>
      <h2>Đặt phòng</h2>
      <Row gutter={[20, 20]}>
        <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <p>Họ tên</p>
          <Input
            name="fullname"
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
            <Checkbox value={"Chèo thuyền"}>Chèo thuền</Checkbox>
            {/* </Space> */}
          </Checkbox.Group>
        </Col>
        <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <p>Chọn ngày</p>
          <RangePicker
            showTime={true}
            placeholder={["Ngày đến", "Ngày đi"]}
            format={"YYYY-DD-MM HH:mm:ss"}
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
