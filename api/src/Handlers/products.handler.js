const { createProduct } = require("../controller/product.controller");
const { Op } = require("sequelize");
const { Product, Category } = require("../db");

const getProducts = async (req, res) => {
  try {
    const { nombre } = req.query;
    let products;

    const includeCategory = {
      model: Category,
      attributes: ["nombre"],
      through: { attributes: [] }, // Excluye la información de la tabla intermedia
    };

    if (nombre) {
      // Busca los productos por nombre
      products = await Product.findAll({
        include: [includeCategory],
        where: {
          nombre: {
            [Op.iLike]: `%${nombre}%`,
          },
        },
      });
    } else {
      // Obtén todos los productos
      products = await Product.findAll({
        include: [includeCategory],
      });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const prodctId = await Product.findByPk(id);
    res.status(200).json(prodctId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postProduct = async (req, res) => {
  try {
    const {
      nombre,
      imagen,
      descripcion,
      precio,
      tipo,
      talla,
      genero,
      categoryName,
    } = req.body;
    const newProduct = await createProduct(
      nombre,
      imagen,
      descripcion,
      precio,
      tipo,
      talla,
      genero,
      categoryName
    );
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = req.body;
    const editProduct = await Product.update(product, {
      where: {
        id,
      },
    });
    res.status(200).json(editProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.destroy({
      where: { id },
    });
    res.json(deleteProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
};
