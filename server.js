const express = require("express");
const session = require("express-session");

const sequelize = require("./config/connection");
const controller = require("./controllers");
const helpers = require("./utils/helpers");

const exphbs = require("express-handlebars");
const path = require("path");
const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3000;

require("dotenv").config();

const sess = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("homepage", { layout: "main" });
});

app.get("/card", (req, res) => {
  res.render("timeline", { layout: "main", data });
});

app.use(express.urlencoded({ extended: true }));
app.use(controller);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, console.log("Now listening"));
});
