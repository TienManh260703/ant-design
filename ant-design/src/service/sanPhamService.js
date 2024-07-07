import axios from "axios";
import { get, post, del, patch, put } from "../utils/request";

export const getSP = async () => {
  try {
    const result = await axios.get("http://localhost:8080/api/san-pham/all");
    console.log("GET response:", result);
    return result;
  } catch (error) {
    console.log("Error get :");
    throw error;
  }
};
