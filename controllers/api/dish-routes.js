const router = require("express").Router();
const Dish = require("../../models/Dish");

// route to create/add a dish using async/await
router.post("/", async (req, res) => {
  try {
    const dishData = await Dish.create(req.body);
    console.log(dishData);
    res.status(200).json(dishData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to delete one dish
router.delete("/:id", async (req, res) => {
  try {
    const dishData = await Dish.findByPk(req.params.id);
    if (!dishData) {
      res.status(404).json({ message: "No dish with this id!" });
      return;
    }
    const dish = dishData.delete({ plain: true });
    res.status(200).json(dish);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
