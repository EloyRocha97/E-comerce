const initialState = {
  users: [],
  products: [
    {
      id: 1,
      nombre: "Pantalon Chupin Negro Hombre",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_800592-MLA31061784825_062019-O.webp",
      descripcion: "Pantalon Chupin Negro Liso",
      precio: 19.99,
      tipo: "Pantalon",
      isActive: true,
      UserId: null,
      Categories: [
        {
          nombre: "Ropa",
        },
      ],
    },
    {
      id: 2,
      nombre: "Pantalon Chupin Bordo Hombre",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_679960-MLA31061779491_062019-O.webp",
      descripcion: "Pantalon Chupin Bordo Liso",
      precio: 19.99,
      tipo: "Pantalon",
      isActive: true,
      UserId: null,
      Categories: [
        {
          nombre: "Ropa",
        },
      ],
    },
    {
      id: 3,
      nombre: "Pantalon Chupin Azul Francia Hombre",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_954050-MLA31061783860_062019-O.webp",
      descripcion: "Pantalon Chupin Azul Francia Liso",
      precio: 19.99,
      tipo: "Pantalon",
      isActive: true,
      UserId: null,
      Categories: [
        {
          nombre: "Ropa",
        },
      ],
    },
    {
      id: 4,
      nombre: "Buso Under Armour Gris",
      imagen: "https://m.media-amazon.com/images/I/91uOIAFquYL._AC_UX522_.jpg",
      descripcion: "Buso Under Armour Gris Con Diseño",
      precio: 15.99,
      tipo: "Buso",
      isActive: true,
      UserId: null,
      Categories: [
        {
          nombre: "Ropa",
        },
      ],
    },
    {
      id: 5,
      nombre: "Buso Under Armour Azul",
      imagen:
        "https://m.media-amazon.com/images/I/51ixX4tSVpL._AC_SX522._SX._UX._SY._UY_.jpg",
      descripcion: "Buso Under Armour Azul Con Diseño",
      precio: 15.99,
      tipo: "Buso",
      isActive: true,
      UserId: null,
      Categories: [
        {
          nombre: "Ropa",
        },
      ],
    },
    {
      id: 6,
      nombre: "Buso Under Armour Bordo",
      imagen:
        "https://m.media-amazon.com/images/I/510BWrbMhXL._AC_SX522._SX._UX._SY._UY_.jpg",
      descripcion: "Buso Under Armour Bordo Con Diseño",
      precio: 15.99,
      tipo: "Buso",
      isActive: true,
      UserId: null,
      Categories: [
        {
          nombre: "Ropa",
        },
      ],
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default rootReducer;
