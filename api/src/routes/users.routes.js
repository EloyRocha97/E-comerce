const { Router } = require("express");

const usersRouter = Router();

const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../Handlers/users.handler");

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUser);
usersRouter.put("/:id", updateUser);
usersRouter.delete("/:id", deleteUser);

module.exports = usersRouter;
