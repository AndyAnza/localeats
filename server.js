const express = require("express");
const sequelize = require("./config/connection");
const controller = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(controller);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, console.log("Now listening"));
});
