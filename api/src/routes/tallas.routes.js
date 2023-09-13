const { Router } = require("express");

const tallasRouter = Router();

const { getTallas } = require("../Handlers/tallas.handler.js");

tallasRouter.get("/", getTallas);

module.exports = tallasRouter;
