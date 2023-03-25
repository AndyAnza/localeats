const router = require("express").Router();
const { User, Dish, Comment } = require("../models");

router.get("/login", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [{ model: Dish }],
      //   order: [["createdAt", "DESC"]],
    });
    const users = userData.map((user) => user.get({ plain: true }));
    console.log(users);
    res.render("pages/login", { users });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
