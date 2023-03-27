const router = require("express").Router();
const { User, Dish, Comment } = require("../models");
const withAuth = require("../utils/auth");


router.delete("/:userId/:dishId", withAuth, async (req, res) => {
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
