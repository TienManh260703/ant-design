import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  notification,
  Radio,
  Row,
  Switch,
} from "antd";
import "./index.css";
import { create } from "../../service/phieuGiamGiaService";
import moment from "moment";
const { RangePicker } = DatePicker;

function FormPGG() {
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    console.log(values);
    const data = {
      ...values,
      ngayBatDau: moment(values.date[0]).format("YYYY-MM-DD"),
      ngayHetHan: moment(values.date[1]).format("YYYY-MM-DD"),
    };
    delete data.date;
    console.log(data);
    const response = await create(values);
    console.log("PGG response : ", response);
    if (values) {
      form.resetFields();
      notification.success({
        message: "Oke",
        description: `Thông tin : ${values.name}`,
        showProgress: true,
        duration: 2,
      });
    } else {
      notification.error({
        message: "Lỗi",
        description: `Thông tin phòng: ${values.name}`,
        showProgress: true,
        duration: 2,
      });
    }
  };
  return (
    <>
      <Form layout="vertical" onFinish={handleSubmit} form={form}>
        <Row gutter={[20, 10]}>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item label="Mã" name={"ma"}>
              <Input disabled={true}></Input>
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item label="Tên phiếu" name={"ten"}>
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
            >
              <Radio.Group>
                <Radio defaultChecked={true} value={1}>
                  %
                </Radio>
                <Radio value={2}>VND</Radio>
              </Radio.Group>
              {/* <Switch
                checkedChildren="VND"
                unCheckedChildren="%"
                defaultChecked
              /> */}
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item label="Phạm vi" name={"phamViApDung"}>
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
            <Form.Item label="Giá trị giảm" name={"giaTriGiamGia"}>
              <InputNumber min={0} className="w-100 "></InputNumber>
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item label="Đơn tối thiểu" name={"giaTriDonToiThieu"}>
              <InputNumber min={0} className="w-100 "></InputNumber>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[20, 10]}>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item label="Giảm giá tối đa" name={"giamToiGia"}>
              <InputNumber min={0} className="w-100 "></InputNumber>
            </Form.Item>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item label="Bắt đầu và Kết thúc" name={"date"}>
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
                Tạo mới
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default FormPGG;
