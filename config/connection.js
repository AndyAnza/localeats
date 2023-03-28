const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "heroku_6ce4b3372970715",
  "b520a2a267663c",
  "ff55d43d",
  {
    host: "us-cdbr-east-06.cleardb.net",
    dialect: "mysql",
    port: 3306,
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
