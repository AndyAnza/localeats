const router = require("express").Router();
const { User, Dish } = require("../models");
const withAuth = require("../utils/auth");

//GET ROUTE TO SIGN UP
router.get("/signup", async (req, res) => {
  try {
    const newUserData = await User.findAll({});
    const newUser = newUserData.map((user) => user.get({ plain: true }));
    console.log(newUser);
    res.render("pages/createaccount", {
      newUser,
      countVisit: req.session.countVisit,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ROUTE TO MY-PROFILE
router.get("/:userId", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.params, {
      include: [{ model: Dish }],
    });
    const userPosts = userData.get({ plain: true });

    if (!userData) {
      res.status(404).json({ message: "No user found with that id!" });
      return;
    }
    console.log(userPosts);
    res.render("pages/my-profile", {
      userPosts,
      countVisit: req.session.countVisit,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ROUTE TO PROFILE SETTINGS
router.get("/my-settings", withAuth, async (req, res) => {
  try {
    const newUserData = await User.findAll({});
    const newUser = newUserData.map((user) => user.get({ plain: true }));
    console.log(newUser);
    res.render("pages/settings-profile", {
      newUser,
      countVisit: req.session.countVisit,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
