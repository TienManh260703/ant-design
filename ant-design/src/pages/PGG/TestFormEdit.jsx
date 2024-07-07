import { EditOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  notification,
  Radio,
  Row,
} from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { getPGGById, updated } from "../../service/phieuGiamGiaService";
const { RangePicker } = DatePicker;

function FormPGG2(props) {
  const { recoder, onReload } = props;

  const [form] = Form.useForm();
  const [showModal, setShowModal] = useState(false);
  const [spinning, setSpinning] = useState(false);

  const [phieuGiamGia, setPhieuGiamgia] = useState({});

  useEffect(() => {
    if (showModal && recoder.id) {
      fetchPGGData(recoder.id);
    }
  }, [showModal, recoder.id]);

  const fetchPGGData = async (id) => {
    try {
      const response = await getPGGById(id);
      if (response.status_code == 200 && response.data) {
        form.setFieldsValue({
          ma: response.data.ma,
          ten: response.data.ten,
          loaiGiamGia: response.data.loaiGiamGia,
          phamViApDung: response.data.phamViApDung,
          giaTriGiamGia: response.data.giaTriGiamGia,
          giaTriDonToiThieu: response.data.giaTriDonToiThieu,
          giamToiGia: response.data.giamToiGia,
          date: [
            moment(response.data.ngayBatDau, "YYYY-MM-DD"),
            moment(response.data.ngayHetHan, "YYYY-MM-DD"),
          ],
          moTa: response.data.moTa,
        });
      } else {
        notification.error({
          message: "Lỗi",
          description: "Api get PGG By Id Lỗi || Data =null",
        });
      }
    } catch (error) {
      console.error("Error fetching PGG:", error);
      notification.error({
        message: "Lỗi",
        description: "Api get PGG By Id Lỗi",
      });
    }
  };
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const handleCancel = () => {
    setShowModal(false);
    form.resetFields();
  };

  const handleSubmit = async (values) => {
    console.log(values);
    const data = {
      ...values,
      ngayBatDau: moment(values.date[0]).format("YYYY-MM-DDTHH:mm:ss"),
      ngayHetHan: moment(values.date[1]).format("YYYY-MM-DDTHH:mm:ss"),
    };
    delete data.date;
    console.log("Data : ", recoder.id, data);
    const response = await updated(recoder.id, data);
    console.log("PGG response : ", response);
    if (response) {
      form.resetFields();
      onReload();
      setShowModal(false);
      notification.success({
        message: "Oke",
        description: `Thông tin : ${response.ma}`,
        showProgress: true,
        duration: 2,
      });
    } else {
      notification.error({
        message: "Lỗi",
        description: `Thông tin : ${response.ma}`,
        showProgress: true,
        duration: 2,
      });
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
        title="Cập nhập PGG"
        open={showModal}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          form={form}
          initialValues={recoder}
        >
          <Row gutter={[20, 10]}>
            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item label="Mã" name={"ma"}>
                <Input disabled={true}></Input>
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                label="Tên phiếu"
                name={"ten"}
                rules={[{ required: true, message: "Tên phiếu chưa có" }]}
              >
                <Input
                  placeholder="Phiếu cho sv"
                  max={50}
                  allowClear={true}
                  showCount={true}
                ></Input>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[20, 10]}>
            <Col
              style={{ display: "flex" }}
              xxl={12}
              xl={12}
              lg={12}
              md={12}
              sm={24}
              xs={24}
            >
              <Form.Item
                label="Loại giảm giá"
                name={"loaiGiamGia"}
                required={true}
                className="w-100 "
                rules={[{ required: true, message: "Loại phiếu chưa có" }]}
              >
                <Radio.Group>
                  <Radio defaultChecked={true} value={1}>
                    %
                  </Radio>
                  <Radio value={2}>VND</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                label="Phạm vi"
                name={"phamViApDung"}
                rules={[{ required: true, message: "Phạm vi  chưa có" }]}
              >
                <Radio.Group>
                  <Radio defaultChecked={true} value={1}>
                    CK
                  </Radio>
                  <Radio value={2}>KO CK</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[20, 10]}>
            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                label="Giá trị giảm"
                name={"giaTriGiamGia"}
                rules={[
                  {
                    required: true,
                    message: "Giá trị phiếu chưa có",
                  },
                ]}
              >
                <InputNumber min={0} className="w-100 "></InputNumber>
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                label="Đơn tối thiểu"
                name={"giaTriDonToiThieu"}
                rules={[
                  {
                    required: true,
                    message: "Giá trị tối thiểu chưa có",
                  },
                ]}
              >
                <InputNumber min={0} className="w-100 "></InputNumber>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[20, 10]}>
            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                label="Giảm giá tối đa"
                name={"giamToiGia"}
                rules={[
                  {
                    required: true,
                    message: "Giảm giá tối đa chưa có",
                  },
                ]}
              >
                <InputNumber min={0} className="w-100 "></InputNumber>
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                label="Bắt đầu và Kết thúc"
                name={"date"}
                rules={[
                  {
                    required: true,
                    message: "Ngày bắt đầu và kết thúc chưa có",
                  },
                ]}
              >
                <RangePicker
                  style={{
                    width: "100%",
                  }}
                  showTime={false}
                  placeholder={["Bắt đầu", "Kết thúc"]}
                  format={"YYYY-MM-DD"}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[20, 10]}>
            <Col span={24}>
              <Form.Item label="Mô tả" name={"moTa"}>
                <Input.TextArea></Input.TextArea>
              </Form.Item>
            </Col>
            <Col span={24}>
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

export default FormPGG2;
