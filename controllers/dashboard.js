const router = require("express").Router();
const { User, Dish } = require("../models");

// route to get one user and its dishes
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
    res.render("dashboard", { userPosts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to create/add a dish using async/await
router.post("/new-dish", async (req, res) => {
  try {
    const dishData = await Dish.create(req.body);
    console.log(dishData);
    res.status(200).json(dishData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
