import { get, post } from "../utils/apiGHN";

export const getProvinces = async () => {
  try {
    const response = await get("master-data/province");
    return response;
  } catch (error) {
    console.error("GET provinces error:", error);
    throw error;
  }
};

export const getDistricts = async (provinceId) => {
  try {
    const response = await get("master-data/district", {
      params: { province_id: provinceId },
    });
    return response;
  } catch (error) {
    console.error("GET districts error:", error);
    throw error;
  }
};

export const getWards = async (districtId) => {
  try {
    const response = await get(`master-data/ward?district_id=${districtId}`);
    return response;
  } catch (error) {
    console.error("GET wards error:", error);
    throw error;
  }
};
