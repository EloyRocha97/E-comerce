const { Router } = require("express");
const { signUp, login, protected } = require("../Handlers/auth.handler");
const { verifyToken } = require("../middleware/token.middleware");

const authRouter = Router();

authRouter.post("/auth", signUp);
authRouter.post("/login", login);
authRouter.get("/protected", verifyToken, protected);

module.exports = authRouter;
