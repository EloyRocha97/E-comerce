import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  RESET_FILTERS,
  SET_GENERO_FILTER,
  SET_TALLA_FILTER,
  SET_ROPA_FILTER,
} from "./actions";

const initialState = {
  users: [],
  products: [],
  allProducts: [],
  productById: [],
  categorys: [],
  tallas: [],
  filters: {
    genero: "Ambos",
    ropa: "Todo",
    talla: "Todos",
  },
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

    ////////////////////////////////////////////////////////////////////////////

    case RESET_FILTERS:
      return {
        ...state,
        filters: {
          genero: "Ambos",
          ropa: "Todo",
          talla: "Todos",
        },
      };

    case SET_GENERO_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          genero: action.payload,
        },
      };

    case SET_ROPA_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          ropa: action.payload,
        },
      };

    case SET_TALLA_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          talla: action.payload,
        },
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
