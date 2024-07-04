import { useState, useEffect } from "react";
import { Select, Form } from "antd";
import {
  getProvinces,
  getDistricts,
  getWards,
} from "../../service/giaoHangNhanhService";

const { Option } = Select;

const GiaoHangNhanh = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await getProvinces();
        console.log("Provinces response:", response);
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
      const response = await getWards(value);
      console.log("Wards response:", response);
      if (response.data) {
        setWards(response.data);
      }
    } catch (error) {
      console.error("Error fetching wards:", error);
    }
  };
  return (
    <Form name="order" layout="vertical">
      <Form.Item label="Tỉnh/Thành" required={true}>
        <Select
          showSearch
          placeholder="Chọn Tỉnh/Thành"
          onChange={handleProvinceChange}
          filterOption={customFilter}
        >
          {provinces.map((province) => (
            <Option key={province.ProvinceID} value={province.ProvinceID}>
              {province.ProvinceName}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="Quận/Huyện" required={true}>
        <Select
          placeholder="Chọn Quận/Huyện"
          onChange={handleDistrictChange}
          disabled={!selectedProvince}
          showSearch
          filterOption={customFilter}
        >
          {districts.map((district) => (
            <Option key={district.DistrictID} value={district.DistrictID}>
              {district.DistrictName}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="Phường/Xã" required={true}>
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
    </Form>
  );
};

export default GiaoHangNhanh;
