const { User } = require("../db");
const { Op } = require("sequelize");

const getUsers = async (req, res) => {
  try {
    const { nombre } = req.query;
    if (nombre) {
      const users = await User.findAll({
        where: {
          nombre: {
            [Op.iLike]: `%${nombre}%`,
          },
        },
      });
      res.status(200).json(users);
    } else {
      const users = await User.findAll();
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = await User.findByPk(id);
    res.status(200).json(userId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const editUser = await User.update(user, {
      where: {
        id,
      },
    });
    res.status(200).json(editUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.destroy({
      where: { id },
    });
    res.json(deleteUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
