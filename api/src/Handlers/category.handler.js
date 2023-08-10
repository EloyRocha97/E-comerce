const { Category } = require("../db");

const postCategory = async (req, res) => {
  try {
    const { nombre } = req.body;
    const categories = await Category.create({ nombre });
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).send(`Error al crear categoria ${nombre}${error}`);
  }
};

const getCategory = async (req, res) => {
  try {
    const allCat = await Category.findAll();
    res.status(200).json(allCat);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  postCategory,
  getCategory,
};
