import { Input, Row, Col, Button } from "antd";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
function BookRoom() {
  const [data, setData] = useState({});

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
  const handleSubmit = () => {
    console.log("submit data json-server : ", data);
  };
  return (
    <>
      <h2>Đặt phòng</h2>
      <Row gutter={[20, 20]}>
        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
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
        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
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
        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
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
        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
          <p>Age</p>
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
