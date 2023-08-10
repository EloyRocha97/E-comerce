const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      // imagen: {
      //   type: DataTypes.TEXT,
      //   allowNull: false,
      //   validate: {
      //     isUrl: {
      //       msg: "La imagen debe de ser una URL valida",
      //     },
      //   },
      // },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            arg: [3],
            msg: "El campo debe tener al menos 3 caracteres",
          },
        },
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            args: true,
            msg: "El email es incorrecto",
          },
        },
      },

      contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [60],
          },
        },
      },

      // shoppingHistory: {
      //   type: DataTypes.ARRAY(DataTypes.INTEGER),
      //   allowNull: true,
      // },
      rol: {
        type: DataTypes.ENUM("admin", "user", "superAdmin"),
        defaultValue: "user",
        field: "role",
      },
    },
    {
      timestamps: false,
    }
  );
};
