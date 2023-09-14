import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
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

    case FILTER_BY_GENERO:
      const payload = action.payload;
      const all =
        state.filteredProductsXropa.length > 0
          ? state.filteredProductsXropa
          : state.filteredProductsXtalla.length > 0
          ? state.filteredProductsXtalla
          : state.allProducts;

      let estadoGenero;
      if (payload === "Ambos") {
        estadoGenero = all;
      } else {
        estadoGenero = all.filter((el) => el.genero === payload);
      }
      state.filteredProductsXgenero = estadoGenero;
      return {
        ...state,
        products: estadoGenero,
      };

    case FILTER_BY_ROPA:
      const porRopa = action.payload;
      const allTodos =
        state.filteredProductsXgenero.length > 0
          ? state.filteredProductsXgenero
          : state.filteredProductsXtalla.length > 0
          ? state.filteredProductsXtalla
          : state.allProducts;

      let estadoRopa;
      if (porRopa !== "Todo") {
        estadoRopa = allTodos.filter((el) => el.tipo === porRopa);
      } else if (porRopa === "Todo") {
        estadoRopa = allTodos;
      } else {
        estadoRopa = allTodos;
      }
      state.filteredProductsXropa = estadoRopa;

      return {
        ...state,
        products: estadoRopa,
      };

    case FILTER_BY_TALLA:
      const porTalla =
        state.filteredProductsXgenero.length > 0
          ? state.filteredProductsXgenero
          : state.filteredProductsXropa.length > 0
          ? state.filteredProductsXropa
          : state.allProducts;

      let filterTalla = [];

      if (!action.payload || action.payload === "Todos") {
        filterTalla = porTalla;
      } else {
        for (let i = 0; i < porTalla.length; i++) {
          let found = porTalla[i].talla.find((t) => t === action.payload);
          if (found) {
            filterTalla.push(porTalla[i]);
          }
        }
      }
      state.filteredProductsXtalla = filterTalla;
      return {
        ...state,
        products: filterTalla,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
