import {
  GET_PRODUCTS,
  CREATE_PRODUCTS,
  GET_CATEGORY,
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

    case GET_CATEGORY:
      return {
        ...state,
        categorys: action.payload,
        allCategorys: action.payload,
      };

    case CREATE_PRODUCTS:
      return {
        ...state,
        createProduct: action.payload,
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
      return {
        ...state,
        genero: payload,
        ropa: "",
        talla: "",
      };

    case FILTER_BY_ROPA:
      const porRopa = action.payload;
      return {
        ...state,
        ropa: porRopa,
      };

    case FILTER_BY_TALLA:
      const porTalla = action.payload;
      return {
        ...state,
        talla: porTalla,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
