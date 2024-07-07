import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  message,
  Radio,
  Row,
  Spin,
  Upload,
} from "antd";

function FormEmployee() {
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    console.log(values);
    // const response = await createRoom(values);
    // console.log("Room response : ", response);
    if (values) {
      form.resetFields();
      message.success("Tạo mới phòng thành công");
    } else {
      message.error("Tạo mới phòng thất bại");
    }
  };
  return (
    <>
      {/* <Spin></Spin> */}
      {/* Mai them */}
      <Form
        layout="vertical"
        onFinish={handleSubmit}
        form={form}
        initialValues={{
          gioiTinh: 1, // Đặt giá trị mặc định cho Giới tính là Nam (1)
        }}
      >
        <Row gutter={[20, 10]}>
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Form.Item label="Mã" name={"ma"}>
              <Input disabled={true}></Input>
            </Form.Item>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Form.Item label="Họ" name={"ho"}>
              <Input placeholder="Nhập họ của bạn"></Input>
            </Form.Item>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Form.Item label="Tên" name={"ten"}>
              <Input></Input>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[20, 10]}>
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Form.Item label="Email" name={"email"}>
              <Input></Input>
            </Form.Item>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Form.Item label="Sdt" name={"sdt"}>
              <Input></Input>
            </Form.Item>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Form.Item label="Ngày sinh" name={"ngaySinh"}>
              <DatePicker
                placeholder="Ngày sinh của bạn"
                format={"DD/MM/YYYY"}
                style={{ width: "100%" }}
              ></DatePicker>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[20, 10]}>
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Form.Item label="Giới tính" name={"gioiTinh"}>
              <Radio.Group>
                <Radio defaultChecked={true} value={1}>
                  Nam
                </Radio>
                <Radio value={2}>Nữ</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Form.Item label="Hình ảnh" name={"hinhAnh"}>
              <Upload maxCount={1}>
                <Button icon={<UploadOutlined />} />
                Chọn ảnh
              </Upload>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default FormEmployee;
