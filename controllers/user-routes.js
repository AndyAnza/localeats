const router = require("express").Router();
const { User, Dish, Comment } = require("../models");

//GET User by Id
router.get("/:id", async (req, res) => {
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
    res.render("timeline", { userPosts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [{ model: Dish }],
      //   order: [["createdAt", "DESC"]],
    });
    const users = userData.map((user) => user.get({ plain: true }));
    console.log(users);
    res.render("login", { users });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
