const router = require("express").Router();
const Dish = require("../../models/Dish");

// route to get one dish
router.get("/:id", async (req, res) => {
  try {
    const dishData = await Dish.findByPk(req.params.id);
    if (!dishData) {
      res.status(404).json({ message: "No dish with this id!" });
      return;
    }
    const dish = dishData.get({ plain: true });
    res.render("card", dishData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to create/add a dish using async/await
router.post("/", async (req, res) => {
  try {
    const dishData = await Dish.create(req.body);
    // if the dish is successfully created, the new response will be returned as json
    console.log(dishData);
    res.status(200).json(dishData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
