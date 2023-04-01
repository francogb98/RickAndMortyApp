const { Sequelize } = require("sequelize");
const userModel = require("./Models/User");
const favoritesModel = require("./Models/Favorite");

const db = new Sequelize(
  `postgres://postgres:root@localhost:5432/rickandmorty`,
  { logging: false }
);

userModel(db);
favoritesModel(db);

//relacion de muchos a muchos

const { User, Favorite } = db.models;

//un usuario puede tener muchos favoritos, le pasamos la tabla intermedia
User.belongsToMany(Favorite, { through: "user_favorite" });

//los favoritos pueden tener varios usuarios
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = { User, Favorite, db };
