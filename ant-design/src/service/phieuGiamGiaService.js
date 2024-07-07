import { get, post, del, patch, put } from "../utils/request";

export const getPGGPage = async (page, size) => {
  try {
    const result = await get(`coupons?page=${page - 1}&size=${size}`);
    console.log("GET response:", result);
    return result;
  } catch (error) {
    console.log("Error get :");
    throw error;
  }
};
export const getPGGById = async (id) => {
  try {
    const result = await get(`coupons/detail/${id}`);
    console.log("GET response:", result);
    return result;
  } catch (error) {
    console.log("Error get :");
    throw error;
  }
};

export const create = async (pgg) => {
  try {
    const result = await post("coupons/add", pgg);
    return result;
  } catch (error) {
    console.error("Error :");
    throw error;
  }
};

export const updated = async (id, pgg) => {
  try {
    const result = await put(`coupons/update/${id}`, pgg);
    return result;
  } catch (error) {
    console.error("Error :");
    throw error;
  }
};

export const deletedCoupons = async (id) => {
  try {
    const result = await del(`coupons/delete/${id}`);
    return result;
  } catch (error) {
    console.error("Error :");
    throw error;
  }
};
