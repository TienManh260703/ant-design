import { get, post, del, patch } from "../utils/request";

export const getPGGPage = async () => {
  try {
    const result = await get("coupons");
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
