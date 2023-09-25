import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  CLEAR_STATE,
  RESET_FILTERS,
  FILTER_BY_GENERO,
  FILTER_BY_ROPA,
  FILTER_BY_TALLA,
} from "./actions";

const initialState = {
  users: [],
  products: [],
  allProducts: [],
  productById: [],
  categorys: [],
  filteredProductsXgenero: [], // Variable para almacenar el resultado del filtro género
  filteredProductsXropa: [], // Variable para almacenar el resultado del filtro género y tipo
  filteredProductsXtalla: [], // Variable para almacenar el resultado del filtro ropa y talla
  genero: "",
  ropa: "",
  talla: "",
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
      };

    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        productById: action.payload,
      };

    case CLEAR_STATE:
      return {
        ...state,
        dogsById: {},
      };

    ////////////////////////////////////////////////////////////////////////////

    case RESET_FILTERS:
      localStorage.removeItem("genero");
      localStorage.removeItem("ropa");
      localStorage.removeItem("talla");
      return {
        ...state,
        products: state.allProducts,
        genero: "",
        ropa: "",
        talla: "",
      };

    case FILTER_BY_GENERO:
      const payload = action.payload;
      // Restablecer el filtro de género en el estado
      return {
        ...state,
        genero: payload,
      };

    case FILTER_BY_ROPA:
      const porRopa = action.payload;
      // Restablecer el filtro de ropa en el estado
      return {
        ...state,
        ropa: porRopa,
      };

    case FILTER_BY_TALLA:
      const porTalla = action.payload;
      // Restablecer el filtro de talla en el estado
      return {
        ...state,
        talla: porTalla,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
