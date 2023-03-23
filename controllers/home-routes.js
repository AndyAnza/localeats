const router = require("express").Router();
const { User, Dish, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    const dishData = await Dish.findAll({
      include: [{ model: User, attributes: { exclude: ["password"] } }],
      order: [["createdAt", "DESC"]],
    });
    const dishes = dishData.map((dish) => dish.get({ plain: true }));
    console.log(dishes);
    res.render("homepage", { dishes });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
