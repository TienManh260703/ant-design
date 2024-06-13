const KEY_TOKEN = "accessToken";
const CART = "CART";
export const setToken = (token) => {
  localStorage.setItem(KEY_TOKEN, token);
};

export const getToken = () => {
  return localStorage.getItem(KEY_TOKEN);
};

export const remeveToken = () => {
  return localStorage.removeItem(KEY_TOKEN);
};
// Giỏ hàng với localStorage
export const setItemToCart = (item) => {
  let carts = JSON.parse(localStorage.getItem(CART)) || [];
  carts = [...carts, item];
  localStorage.setItem(CART, JSON.stringify(carts));
};

export const getAllItemToCart = () => {
  return JSON.parse(localStorage.getItem(CART)) || [];
};
