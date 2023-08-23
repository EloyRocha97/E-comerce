const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: {
            args: true,
            msg: "La imagen debe ser una URL válida",
          },
        },
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      tipo: {
        type: DataTypes.ENUM(
          "Buzo",
          "Remera",
          "Pantalon",
          "Camisa",
          "Bermuda",
          "Campera"
        ),
        allowNull: false,
      },
      talla: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      genero: {
        type: DataTypes.ENUM("Hombre", "Mujer"),
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );

  return Product;
};
