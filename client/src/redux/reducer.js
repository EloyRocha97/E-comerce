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
  productById: [],
  categorys: [],
};

const rootReducer = (state = initialState, action) => {
  // console.log("Tallas en state.allProducts:");
  // state.allProducts.forEach((product) => {
  //   console.log(product.talla);
  // });
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
      };
    //////////////////////////////// FILTROS ////////////////////////////////
    case FILTER_BY_CATEGORY:
      const porCategoria = action.payload;
      let estadoCategoria;
      if (
        porCategoria === "Ropa" ||
        porCategoria === "Zapatillas" ||
        porCategoria === "Accesorios"
      ) {
        estadoCategoria = state.allProducts.filter(
          (el) => el.Categories[0].nombre === porCategoria
        );
      } else {
        estadoCategoria = state.allProducts;
      }
      return {
        ...state,
        products: estadoCategoria,
      };
    // GENERO
    case FILTER_BY_GENERO:
      const porGenero = action.payload;
      let estadoGenero;
      if (porGenero === "Hombre" || porGenero === "Mujer") {
        estadoGenero = state.allProducts.filter(
          (el) => el.genero === porGenero
        );
      } else if (porGenero === "Ambos") {
        estadoGenero = state.allProducts;
      } else {
        estadoGenero = state.allProducts;
      }
      return {
        ...state,
        products: estadoGenero,
      };
    // ROPA
    case FILTER_BY_ROPA:
      const porRopa = action.payload;
      //
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
        estadoRopa = state.allProducts.filter((el) => el.tipo === porRopa);
      } else if (porRopa === "Todo") {
        estadoRopa = state.allProducts;
      } else {
        estadoRopa = state.allProducts;
      }
      return {
        ...state,
        products: estadoRopa,
      };
    // TALLA
    case FILTER_BY_TALLA:
      const porTalla = action.payload;
      //
      let estadoTallas;
      if (
        porTalla === "S" ||
        porTalla === "M" ||
        porTalla === "L" ||
        porTalla === "XL" ||
        porTalla === "38" ||
        porTalla === "40" ||
        porTalla === "42" ||
        porTalla === "44"
      ) {
        estadoTallas = state.products.filter((el) => el.talla === porTalla);
      } else {
        estadoTallas = state.products;
      }
      return {
        ...state,
        products: estadoTallas,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
