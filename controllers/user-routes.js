const router = require("express").Router();
const { User, Dish, Comment } = require("../models");

//GET User by Id
router.get("/login/:id", async (req, res) => {
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

//Get all users to log in
router.get("/login", async (req, res) => {
  try {
    const userData = await User.findAll();
    const users = userData.map((user) => user.get({ plain: true }));
    console.log(users);
    res.render("pages/login", { users });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:userId/:dishId", async (req, res) => {
  try {
    const { userId, dishId } = req.params;

    const deleteDish = await Dish.destroy({
      where: {
        id: dishId,
        // userId,
      },
    });

    if (deleteDish === 0) {
      return res.status(404).json({ error: "Dish not found" });
    }

    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
