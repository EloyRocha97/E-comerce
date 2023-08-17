import axios from "axios";

export const GET_PRODUCT = "GET_PRODUCT";

export const getProducts = () => {
  return async function (dispatch) {
    const dataProduct = await axios.get("http://localhost:3001/product");
    const product = dataProduct.data;
    dispatch({ type: GET_PRODUCT, payload: product });
  };
};
