import {
  Button,
  Form,
  Input,
  InputNumber,
  Row,
  Col,
  Select,
  Switch,
} from "antd";
import { createRoom } from "../../service/roomService";
const { Option } = Select;
const CreateRoom = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    // console.log(values);
    const response = await createRoom(values);
    console.log("Room response : ", response);
    if (response) {
      form.resetFields();
    }
  };
  return (
    <>
      <h1>Thêm phòng mới</h1>
      <Form
        name="create-room"
        layout="vertical"
        onFinish={handleSubmit}
        form={form}
      >
        <Row gutter={[20, 20]}>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              label="Tên phòng"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Tên phòng không được để trống",
                },
                // {
                //   pattern: /^[a-zA-Z\s]+$/,
                //   message: "Tên phòng chỉ được chứa chữ cái",
                // },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              label="Số lượng giường"
              name="quantity_bed"
              rules={[
                {
                  required: true,
                  message: "Số giường không được để trống",
                },
              ]}
            >
              <InputNumber min={1} max={10} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[20, 20]}>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              label="Số người tối đa"
              name="quantity_people"
              rules={[
                {
                  required: true,
                  message: "Số lượng người tối đa không được để trống",
                },
              ]}
            >
              <InputNumber min={1} max={20} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              label="Giá phòng"
              name="price"
              rules={[
                {
                  required: true,
                  message: "Giá phòng không được để trống",
                },
              ]}
            >
              <InputNumber min={1} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[20, 20]}>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              name="utils"
              label="Tiện ích"
              rules={[
                {
                  required: true,
                  message: "Chọn ít nhất 1 dịch vụ",
                },
              ]}
            >
              <Select
                mode="multiple"
                allowClear={true}
                placeholder="Chọn tiện ích"
                style={{
                  width: "100%",
                }}
              >
                <Option value="Wifi">Wifi</Option>
                <Option value="Nóng lạnh">Nóng lạnh</Option>
                <Option value="Điều hòa">Điều hòa</Option>
                <Option value="Tủ lạnh">Tủ lạnh</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              label="Trạng thái"
              name="status"
              valuePropName="checked"
              initialValue={false}
            >
              <Switch></Switch>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[20, 20]}>
          <Col xxl={24} xl={24} lg={24} md={12} sm={24} xs={24}>
            <Form.Item label="Mô tả" name="description">
              <Input.TextArea
                showCount
                maxLength={100}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Tạo mới
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default CreateRoom;
