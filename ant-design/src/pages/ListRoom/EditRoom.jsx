import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  Switch,
  message,
} from "antd";
const { Option } = Select;
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import { updateRoom } from "../../service/roomService";
function EditRoom(props) {
  const { recoder, onReload } = props;
  console.log(recoder);
  const [form] = Form.useForm();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const handleCancel = () => {
    setShowModal(false);
    form.resetFields();
  };

  const handleSubmit = async (values) => {
    console.log(values);
    const response = await updateRoom(recoder.id, values);
    if (response) {
      message.success("Update thành công");
      setShowModal(false);
      onReload();
    } else {
      message.error("Update thất bại");
    }
  };
  return (
    <>
      <Button
        style={{
          marginLeft: "10px",
          backgroundColor: "orange",
          borderColor: "orange",
          color: "white",
        }}
        size="small"
        icon={<EditOutlined />}
        onClick={handleShowModal}
      />
      <Modal
        title="Edit Room"
        open={showModal}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="edit-room-form"
          layout="vertical"
          onFinish={handleSubmit}
          form={form}
          initialValues={recoder}
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
              >
                <Switch></Switch>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[20, 20]}>
            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                label="Loại phòng"
                name="type_room"
                valuePropName="checked"
              >
                <Switch
                  checkedChildren="VIP"
                  unCheckedChildren="Thường"
                  defaultChecked
                />
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
              {/* <Form.Item
              label="Ảnh phòng"
              name="images"
              valuePropName="checked"
              initialValue={false}
            >
              <Upload listType="picture" maxCount={3} multiple>
                <Button
                  icon={<UploadOutlined />}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Upload (Max: 3)
                </Button>
              </Upload>
            </Form.Item> */}
            </Col>
          </Row>
          <Row>
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
                  Cập nhập
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}
export default EditRoom;
