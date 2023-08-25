import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const getProducts = () => {
  return async function (dispatch) {
    const dataProduct = await axios.get("http://localhost:3001/product");
    const product = dataProduct.data;
    dispatch({ type: GET_PRODUCTS, payload: product });
  };
};

export const GET_CATEGORY = "GET_CATEGORY";
export const getCategory = () => {
  return async function (dispatch) {
    const dataCategory = await axios.get("http://localhost:3001/category");
    const category = dataCategory.data;
    dispatch({ type: GET_CATEGORY, payload: category });
  };
};

export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const getProductById = (id) => {
  return async function (dispatch) {
    const dataProduct = await axios.get(`http://localhost:3001/product${id}`);
    const product = dataProduct.data;
    dispatch({ type: GET_PRODUCT_BY_ID, payload: product });
  };
};

export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const filterByCategoria = (payload) => {
  return {
    type: FILTER_BY_CATEGORY,
    payload,
  };
};

export const FILTER_BY_GENERO = "FILTER_BY_GENERO";
export const filterByGenero = (payload) => {
  return {
    type: FILTER_BY_GENERO,
    payload,
  };
};

export const FILTER_BY_ROPA = "FILTER_BY_ROPA";
export const filterByRopa = (payload) => {
  return {
    type: FILTER_BY_ROPA,
    payload,
  };
};

export const FILTER_BY_TALLA = "FILTER_BY_TALLA";
export const filterByTalla = (payload) => {
  return {
    type: FILTER_BY_TALLA,
    payload,
  };
};
