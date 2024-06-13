import { get, post, del, patch } from "../utils/request";

export const createRoom = async (room) => {
  try {
    const result = await post("rooms/add", room);
    return result;
  } catch (error) {
    console.error("Error creating room:");
    throw error;
  }
};
