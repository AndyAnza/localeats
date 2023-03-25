const router = require("express").Router();
const { User, Dish } = require("../models");

//GET route to signup
router.get("/signup", async (req, res) => {
  try {
    const newUserData = await User.findAll({});
    const newUser = newUserData.map((user) => user.get({ plain: true }));
    console.log(newUser);
    res.render("pages/createaccount", { newUser });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET route to profile settings
router.get("/my-settings", async (req, res) => {
  try {
    const newUserData = await User.findAll({});
    const newUser = newUserData.map((user) => user.get({ plain: true }));
    console.log(newUser);
    res.render("profile", { newUser });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
