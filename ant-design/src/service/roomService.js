import { get, post, del, patch } from "../utils/request";

export const getProductList = async () => {
  try {
    const result = await get("all-rooms");
    return result;
  } catch (error) {
    console.error("Error fetching product list:", error);
    throw error;
  }
};

export const createProduct = async (options) => {
  try {
    const result = await post("rooms/add", options);
    return result;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const result = await del(`rooms/${id}`);
    return result;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

export const editProduct = async (id, option) => {
  try {
    const result = await patch(`rooms/${id}`, option);
    return result;
  } catch (error) {
    console.error("Error editing product:", error);
    throw error;
  }
};
