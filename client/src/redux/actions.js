import axios from "axios";

// export const GET_CATEGORY = "GET_CATEGORY";
// export const getCategory = () => {
//   return async function (dispatch) {
//     const dataCategory = await axios.get("http://localhost:3001/category");
//     const category = dataCategory.data;
//     dispatch({ type: GET_CATEGORY, payload: category });
//   };
// };

export const GET_PRODUCTS = "GET_PRODUCTS";
export const getProducts = () => {
  return async function (dispatch) {
    const dataProduct = await axios.get("http://localhost:3001/product");
    const product = dataProduct.data;
    dispatch({ type: GET_PRODUCTS, payload: product });
  };
};

export const GET_TALLAS = "GET_TALLAS";
export const getTallas = () => {
  return async function (dispatch) {
    try {
      const response = await fetch("http://localhost:3001/tallas");
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

export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const getProductById = (id) => {
  return async function (dispatch) {
    const dataProduct = await axios.get(`http://localhost:3001/product${id}`);
    const product = dataProduct.data;
    dispatch({ type: GET_PRODUCT_BY_ID, payload: product });
  };
};

//////////////////////////////////////////////////////////////////////////////////
export const RESET_FILTERS = "RESET_FILTERS";
export const resetFilters = () => ({
  type: RESET_FILTERS,
});

export const SET_GENERO_FILTER = "SET_GENERO_FILTER";
export const setGeneroFilter = (genero) => ({
  type: SET_GENERO_FILTER,
  payload: genero,
});

export const SET_ROPA_FILTER = "SET_ROPA_FILTER";
export const setRopaFilter = (ropa) => ({
  type: SET_ROPA_FILTER,
  payload: ropa,
});

export const SET_TALLA_FILTER = "SET_TALLA_FILTER";
export const setTallaFilter = (talla) => ({
  type: SET_TALLA_FILTER,
  payload: talla,
});
