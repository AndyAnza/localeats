const router = require("express").Router();
const { User, Dish, Comment } = require("../models");

router.get("/", async (req, res) => {
  const dishData = await Dish.findAll({
    include: [{ model: User }, { model: Comment }],
    attributes: { exclude: ["password"] },
    order: [["createdAt", "DESC"]],
  }).catch((err) => {
    res.json(err);
  });
  const dishes = dishData.map((dish) => dish.get({ plain: true }));
  console.log(dishes);
  res.render("homepage");
});

// route to get all dishes
router.get("/", async (req, res) => {});

// route to get one dish
router.get("/dish/:id", async (req, res) => {
  try {
    const dishData = await Dish.findByPk(req.params.id);
    if (!dishData) {
      res.status(404).json({ message: "No dish with this id!" });
      return;
    }
    const dish = dishData.get({ plain: true });
    res.render("dish", dish);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
