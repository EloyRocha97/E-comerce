const { Router } = require("express");
const usersRouter = require("./users.routes");
const productsRouter = require("./products.routes");
const authRouter = require("./auth.routes");
const categoryRouter = require("./category.routes");
// const tallasRouter = require("./tallas.routes");

const mainRouter = Router();

mainRouter.use("/user", usersRouter);
mainRouter.use("/product", productsRouter);
mainRouter.use("/", authRouter);
mainRouter.use("/category", categoryRouter);
// mainRouter.use("/tallas", tallasRouter);

module.exports = mainRouter;
