const router = require("express").Router();
const userRoutes = require("./user-routes");
const dishRoutes = require("./dish-routes");

router.use("/user", userRoutes);
router.use("/dish", dishRoutes);

module.exports = router;
