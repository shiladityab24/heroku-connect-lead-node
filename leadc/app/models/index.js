const config = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },

);


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.lead = require("./lead.model.js")(sequelize, Sequelize);

module.exports = db;






















// , {
//     schema: 'public', // Specify the schema (if it's not 'public')
//   }