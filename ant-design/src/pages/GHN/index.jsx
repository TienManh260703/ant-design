import { useState, useEffect } from "react";
import {
  Select,
  Form,
  Row,
  Col,
  Input,
  Button,
  message,
  Switch,
  Card,
} from "antd";
import {
  getProvinces,
  getDistricts,
  getWards,
} from "../../service/giaoHangNhanhService";
import "./index.css";
import InforOrder from "../../components/InfoOrder";
const { Option } = Select;

const GiaoHangNhanh = () => {
  const [form] = Form.useForm();

  const [ship, setShip] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [inForOrder, setInforOrder] = useState({});
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await getProvinces();
        console.log("Provinces response:", response);
        setInforOrder({
          tienHang: 100000,
          phiVanChuyen: 1000,
        });
        if (response) {
          setProvinces(response.data);
        }
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchProvinces();
  }, []);

  const handleProvinceChange = async (value) => {
    setSelectedProvince(value);
    setSelectedDistrict(null);
    setWards([]);
    try {
      const response = await getDistricts(value);
      console.log("ID Tinh Thanh : " + value);
      console.log("Districts response:", response);
      if (response) {
        setDistricts(response.data);
      }
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  const customFilter = (input, option) => {
    return (
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
      option.value.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
    );
  };

  const handleDistrictChange = async (value) => {
    setSelectedDistrict(value);
    try {
      console.log("ID QH : " + value);

      const response = await getWards(value);
      console.log("Wards response:", response);
      if (response.data) {
        setWards(response.data);
      }
    } catch (error) {
      console.error("Error fetching wards:", error);
    }
  };
  const handleShipChange = (checked) => {
    setShip(checked);
  };

  const handleSubmit = async (values) => {
    console.log(values);
    const data = {
      ...values,
      inForder: inForOrder,
    };
    console.log(data);
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
      <Row gutter={[20, 20]}>
        <Col
          xxl={24}
          xl={24}
          lg={24}
          md={24}
          sm={24}
          xs={24}
          className="d-flex mb-8"
        >
          <b> Giao hàng</b>
          <Switch onChange={handleShipChange} className="ms-5" />
        </Col>
      </Row>
      <Form
        style={{
          backgroundColor: "#ffffff",
        }}
        className="br-10"
        name="order"
        layout="vertical"
        onFinish={handleSubmit}
        form={form}
      >
        <Row>
          <Col
            className="p-10 br-10 "
            xxl={16}
            xl={16}
            lg={16}
            md={16}
            sm={24}
            xs={24}
          >
            {ship && (
              <>
                <Row gutter={[20, 0]}>
                  <Col xxl={8} xl={8} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item label="Tên sản phẩm" name={"tenSanPham"}>
                      <Input placeholder="Tên sản phẩm"></Input>
                    </Form.Item>
                  </Col>
                  <Col xxl={8} xl={8} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item label="Số điện thoại" name={"sdt"}>
                      <Input placeholder="Số điện thoại"></Input>
                    </Form.Item>
                  </Col>
                  <Col xxl={8} xl={8} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item label="Tên khách hàng" name={"tenKhachHang"}>
                      <Input placeholder="Tên khách hàng"></Input>
                    </Form.Item>
                  </Col>
                  <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Form.Item name={"email"} label="Email" required={true}>
                      <Input placeholder="example@gmail.com"></Input>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[20, 0]}>
                  <Col xxl={8} xl={8} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                      label="Tỉnh/Thành"
                      required={true}
                      name={"tinhThanh"}
                    >
                      <Select
                        showSearch
                        placeholder="Chọn Tỉnh/Thành"
                        onChange={handleProvinceChange}
                        filterOption={customFilter}
                      >
                        {provinces.map((province) => (
                          <Option
                            key={province.ProvinceID}
                            value={province.ProvinceID}
                          >
                            {province.ProvinceName}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>

                  <Col xxl={8} xl={8} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                      label="Quận/Huyện"
                      required={true}
                      name={"quanHuyen"}
                    >
                      <Select
                        placeholder="Chọn Quận/Huyện"
                        onChange={handleDistrictChange}
                        disabled={!selectedProvince}
                        showSearch
                        filterOption={customFilter}
                      >
                        {districts.map((district) => (
                          <Option
                            key={district.DistrictID}
                            value={district.DistrictID}
                          >
                            {district.DistrictName}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xxl={8} xl={8} lg={12} md={12} sm={24} xs={24}>
                    <Form.Item
                      label="Phường/Xã"
                      required={true}
                      name={"phuongXa"}
                    >
                      <Select
                        placeholder="Chọn Phường/Xã"
                        disabled={!selectedDistrict}
                        showSearch
                        filterOption={customFilter}
                      >
                        {wards.map((ward) => (
                          <Option key={ward.WardCode} value={ward.WardCode}>
                            {ward.WardName}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Form.Item label="Địa chỉ cụ thể" name={"diaChi"}>
                      <Input.TextArea></Input.TextArea>
                    </Form.Item>
                  </Col>
                </Row>
              </>
            )}
          </Col>

          <Col className="p-10" xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <Row gutter={[20, 20]}>
              <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                <Form.Item label="Mã phiếu giảm giá" name={"maPhieuGiamGia"}>
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                <Form.Item label="Quy đổi thành tiền" name={"quyDoiThanhTien"}>
                  <Input></Input>
                </Form.Item>
              </Col>
              <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                <InforOrder data={inForOrder} />
              </Col>
              <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Xác nhận đơn hàng
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default GiaoHangNhanh;
