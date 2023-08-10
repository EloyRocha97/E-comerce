const { Router } = require("express");
const { postCategory, getCategory } = require("../Handlers/category.handler");

const categoryRouter = Router();

categoryRouter.post("/", postCategory);
categoryRouter.get("/", getCategory);

module.exports = categoryRouter;
