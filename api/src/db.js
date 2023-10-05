const { Sequelize } = require("sequelize");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWPRD, DB_HOST, DB_RENDER } = process.env;

const sequelize = new Sequelize(
  "postgres://e_comerce_user:pp4v7ahA69ObwLFBj2sWQDUbbWWa94So@dpg-ckfgp1ns0fgc73cgji8g-a/e_comerce",
  { logging: false, native: false }
);

//**
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);
//**

//relacionamos

const { User, Product, Category, Favorite } = sequelize.models;

User.hasMany(Product);
Product.belongsTo(User);
Product.belongsToMany(Category, { through: "categoryProducts" });
Category.belongsToMany(Product, { through: "categoryProducts" });
Favorite.belongsTo(User, { foreignKey: "userId" });
Favorite.belongsTo(Product, { foreignKey: "productId" });

module.exports = { sequelize, ...sequelize.models };
