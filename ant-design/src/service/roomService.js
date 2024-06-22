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

export const getListRoom = async () => {
  try {
    const result = await get("rooms");
    return result;
  } catch (error) {
    console.log("Error get room:");
    throw error;
  }
};

export const deletedRoom = async (id) => {
  try {
    const result = await del(`rooms/deleted/${id}`);
    return result;
  } catch (error) {
    console.log("Error deleted room");
    throw error;
  }
};

export const viewEditRoom = async (id) => {
  try {
    const result = await get(`rooms/view-edit-room/${id}`);
    return result;
  } catch (error) {
    console.error("Erro get room");
    throw error;
  }
};

export const updateRoom = async (id, options) => {
  try {
    const result = await patch(`rooms/update-rooms/${id}`, options);
    return result;
  } catch (error) {
    console.error("Erro update room");
    throw error;
  }
};
