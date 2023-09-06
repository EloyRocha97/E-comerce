import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  FILTER_BY_CATEGORY,
  FILTER_BY_GENERO,
  FILTER_BY_ROPA,
  FILTER_BY_TALLA,
  GET_CATEGORY,
} from "./actions";

const initialState = {
  users: [],
  products: [],
  allProducts: [],
  productsAll: [],
  productById: [],
  categorys: [],
  filteredProductsXgenero: [], // Variable para almacenar el resultado del filtro género
  filteredProductsXropa: [], // Variable para almacenar el resultado del filtro género y tipo
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
        productsAll: action.payload,
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
      };

    case FILTER_BY_GENERO:
      const payload = action.payload;
      const all = state.allProducts;
      let estadoGenero;
      if (payload === "Ambos") {
        estadoGenero = all;
        console.log("estadoGenero", estadoGenero);
      } else {
        estadoGenero = all.filter((el) => el.genero === payload);
        console.log("estadoGenero", estadoGenero);
      }
      state.filteredProductsXgenero = estadoGenero;
      console.log("pivot", state.filteredProductsXgenero);

      return {
        ...state,
        products: estadoGenero,
      };

    case FILTER_BY_ROPA:
      const porRopa = action.payload;
      const allTodos = state.filteredProductsXgenero;

      let estadoRopa;

      if (
        porRopa === "Buzo" ||
        porRopa === "Campera" ||
        porRopa === "Remera" ||
        porRopa === "Camisa" ||
        porRopa === "Pantalon" ||
        porRopa === "Bermuda" ||
        porRopa === "Zapatilla"
      ) {
        estadoRopa = allTodos.filter((el) => el.tipo === porRopa);
      } else if (porRopa === "Todo") {
        estadoRopa = allTodos;
      } else {
        estadoRopa = allTodos;
      }
      state.filteredProductsXropa = estadoRopa;
      console.log("Ropaa", state.filteredProductsXropa);
      return {
        ...state,
        products: estadoRopa,
      };

    case FILTER_BY_TALLA:
      const porTalla = state.filteredProductsXropa;
      let filterTalla = [];

      if (!action.payload || action.payload === "Todos") {
        filterTalla = state.filteredProductsXropa;
      } else {
        for (let i = 0; i < porTalla.length; i++) {
          let found = porTalla[i].talla.find((t) => t === action.payload);
          if (found) {
            filterTalla.push(porTalla[i]);
          }
        }
      }
      return {
        ...state,
        products: filterTalla,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
