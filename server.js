const express = require("express");
const sequelize = require("./config/connection");
const controller = require("./controllers");
const exphbs = require("express-handlebars");
const path = require("path");
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3000;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("homepage", { layout: "main" });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(controller);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, console.log("Now listening"));
});


