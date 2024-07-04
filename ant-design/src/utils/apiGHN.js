import axios from "axios";
const API_DOMAIN = "https://online-gateway.ghn.vn/shiip/public-api/";

const axiosInstance = axios.create({
  baseURL: API_DOMAIN,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Token: "0292ba75-34b6-11ef-89ca-1aad91406dac",
    ShopId: "5160967 - 0397962849",
  },
});

export const get = async (path, data) => {
  try {
    const response = await axiosInstance.get(path, data);
    return response.data;
  } catch (error) {
    console.error("GET request error:", error);
    throw error;
  }
};

export const post = async (path, data) => {
  try {
    const response = await axiosInstance.post(path, data);
    return response.data;
  } catch (error) {
    console.error("POST request error:", error);
    throw error;
  }
};
