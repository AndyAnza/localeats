const router = require("express").Router();
const { User, Dish } = require("../models");


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
