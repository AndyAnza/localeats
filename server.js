const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./config/connection");
const controllers = require("./controllers");
const helpers = require("./utils/helpers");

const exphbs = require("express-handlebars");
const path = require("path");
const hbs = exphbs.create({
  // Specify the folder for partials
  partialsDir: "views/partials",
  helpers,
  // Specify the layout template
  defaultLayout: "main",
});

const app = express();
const PORT = process.env.PORT || 3000;

require("dotenv").config();

const sess = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: false, // change once we have https cert
    secure: false, // change to true before deployment
    sameSite: "lax",
  },
  resave: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(controllers);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, console.log("Now listening"));
});
