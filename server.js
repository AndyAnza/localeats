const express = require("express");
const sequelize = require("./config/connection");
const controller = require("./controllers");


const app = express();
const PORT = process.env.PORT || 3000;

const handlebars = require('handlebars');

app.engine('handlebars', handlebars({
  layoutsDir: `${__dirname}/vies/layouts`
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('homepage', {layout: 'main'});
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(controller);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, console.log("Now listening"));
});
