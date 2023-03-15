const express = require("express");
const sequelize = require("./config/connection");
const { User, Dish, Comment } = require("./models/index");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, console.log("Now listening"));
});
