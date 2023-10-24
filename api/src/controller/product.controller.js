const { Product, Favorite } = require("../db");

const createProduct = async (
  nombre,
  imagen,
  descripcion,
  precio,
  tipo,
  talla,
  genero,
  categoryName
) => {
  if (!nombre || typeof nombre !== "string") {
    throw new Error("El nombre del producto es incorrecto");
  }
  if (!descripcion || typeof descripcion !== "string") {
    throw new Error("La descripcion no puede estar vacia");
  }

  if (!precio || precio < 0 || isNaN(Number(precio))) {
    throw new Error("No se proporciono precio, o el formato es incorrecto");
  }

  if (!tipo) {
    throw new Error("Debe proporcionar una categoría");
  }

  if (!talla) {
    throw new Error("Debe proporcionar una talla");
  }
  if (!genero) {
    throw new Error("Debe proporcionar un genero");
  }

  // Crear el producto con la categoría proporcionada
  const newProduct = await Product.create({
    nombre,
    imagen,
    descripcion,
    precio,
    tipo,
    talla,
    genero,
    categoryName, // Asignar la categoría directamente al producto
  });

  return newProduct;
};

const moduleGetFavorite = async (userId) => {
  try {
    const favorite = await Favorite.findAll({
      where: { userId },
    });

    if (!favorite) {
      throw new Error("No se encontró el favorito");
    }

    return favorite;
  } catch (error) {
    console.error(error);
    throw new Error("No se pudo obtener el favorito");
  }
};

const modulePostAddFavorite = async (productId, userId) => {
  try {
    let getFav = await Favorite.findOne({
      where: { productId, userId },
    });
    if (!getFav) {
      await Favorite.create({ productId, userId });
      console.log("Se agrego a favoritos");

      return true;
    } else {
      await Favorite.destroy({
        where: { productId, userId },
      });
      console.log("Se elimino el producto de favoritos");
    }
  } catch (error) {
    console.error("Error en la inserción del usuario", error);
    throw new Error(`Error en la inserción del usuario`);
  }
};

module.exports = { createProduct, modulePostAddFavorite, moduleGetFavorite };
