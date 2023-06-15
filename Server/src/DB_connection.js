require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const CharacterModel = require('./models/Character');
const FavoriteModel = require('./models/Favorite');
const UserModel = require('./models/User');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   // URL
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/rickandmorty`,
   { logging: false, native: false }
);

sequelize.authenticate()
   .then(() => console.log('Connected has been established successfully'))
   .catch( error => console.log('Unable to connect to the database: ', error.message))

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

//
CharacterModel(sequelize);
FavoriteModel(sequelize);
UserModel(sequelize);
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: 'user_fovorite', timestamps: false });
Favorite.belongsToMany(User, { through: 'user_favorite', timestamps: false });

module.exports = {
   ...sequelize.models,
   conn: sequelize,
   // User,
   // Favorite,
   // Character
};
