const router = require("express").Router();
const { User, Dish } = require("../models");
const withAuth = require('../utils/auth');

// route to get one user and its dishes
router.get("/:id", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: Dish }],
    });
    const userPosts = userData.get({ plain: true });

    if (!userData) {
      res.status(404).json({ message: "No user found with that id!" });
      return;
    }
    console.log(userPosts);
    res.render("pages/dashboard", { userPosts, countVisit: req.session.countVisit, loggedIn: req.session.loggedIn, });
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to create/add a dish using async/await
router.post("/new-dish", withAuth, async (req, res) => {
  try {
    const dishData = await Dish.create(req.body);
    console.log(dishData);
    res.status(200).json(dishData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
