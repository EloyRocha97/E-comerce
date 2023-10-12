const { Router } = require("express");
const {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("../Handlers/products.handler");

const productsRouter = Router();

productsRouter.get("/", getProducts);
productsRouter.get("/:id", getProduct);
productsRouter.put("/:id", updateProduct);
productsRouter.delete("/:id", deleteProduct);
productsRouter.post("/", postProduct);

module.exports = productsRouter;
