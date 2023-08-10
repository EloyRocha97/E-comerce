const { Product, Category } = require("../db");

const createProduct = async (
  nombre,
  imagen,
  descripcion,
  precio,
  tipo,
  categoryId
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

  // Buscar la categoría por su nombre
  const category = await Category.findOne({ where: { nombre: categoryId } });
  if (!category) {
    throw new Error("La categoría proporcionada no existe");
  }

  // Crear el producto y asignar la categoría
  const newProduct = await Product.create({
    nombre,
    imagen,
    descripcion,
    precio,
    tipo,
  });
  await newProduct.addCategory(category);

  return newProduct;
};

module.exports = { createProduct };
