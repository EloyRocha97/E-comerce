import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const getProducts = () => {
  return async function (dispatch) {
    const dataProduct = await axios.get("/product");
    const product = dataProduct.data;
    dispatch({ type: GET_PRODUCTS, payload: product });
  };
};

export const GET_TALLAS = "GET_TALLAS";
export const getTallas = () => {
  return async function (dispatch) {
    try {
      const response = await fetch("/tallas");
      if (!response.ok) {
        throw new Error("Error al obtener las tallas");
      }

      const data = await response.json();

      dispatch({ type: GET_TALLAS, payload: data });
    } catch (error) {
      console.error("Error en la acción getTallas:", error);
    }
  };
};

export const CREATE_PRODUCTS = "CREATE_PRODUCTS";
export function createRecipe(payload) {
  const request = {
    url: "/product/create",
    method: "POST",
    data: payload,
  };
  return async (dispatch) => {
    return axios(request).then((response) => {
      dispatch({ type: CREATE_PRODUCTS, payload: response.data.results });
    });
  };
}

export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const getProductById = (id) => {
  return async function (dispatch) {
    const dataProduct = await axios.get(`/product/${id}`);
    const product = dataProduct.data;
    dispatch({ type: GET_PRODUCT_BY_ID, payload: product });
  };
};

export const CLEAR_STATE = "CLEAR_STATE";
export const clearState = () => {
  return { type: CLEAR_STATE };
};
//////////////////////////////////////////////////////////////////////////////////
export const RESET_FILTERS = "RESET_FILTERS";
export const resetFilters = () => ({
  type: RESET_FILTERS,
});

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
