const router = require("express").Router();
const { User, Dish } = require("../models");
const withAuth = require("../utils/auth");

// HOME ROUTE TO SEE ALL DISHES OF ALL USERS
router.get("/", async (req, res) => {
  try {
    const dishData = await Dish.findAll({
      include: [{ model: User, attributes: { exclude: ["password"] } }],
      order: [["createdAt", "DESC"]],
    });
    const dishes = dishData.map((dish) => dish.get({ plain: true }));
    console.log(dishes);
    req.session.save(() => {
      if (req.session.countVisit) {
        req.session.countVisit++;
      } else {
        req.session.countVisit = 1;
      }
      res.render("pages/homepage", {
        dishes,
        countVisit: req.session.countVisit,
        loggedIn: req.session.loggedIn,
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ROUTE TO LOGIN
// IF LOGGED IN RENDER HOME
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("pages/login");
});

// CREATE NEW DISH FROM MODAL ROUTE
router.post("/", withAuth, async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    try {
      const { dish_name, description, price, userId } = req.body;
      if (!dish_name || !description || !price || !userId) {
        return res.status(400).json({ error: "Missing required properties" });
      }
      const newDish = await Dish.create({
        dish_name,
        description,
        price,
        userId,
      });
      res.status(202).json({ message: "Dish created", dish: newDish });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
});

module.exports = router;
