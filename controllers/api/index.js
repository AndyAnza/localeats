const router = require("express").Router();
const userRoutes = require("./user-routes");
const dishRoutes = require("./dish-routes");
const loginRoutes = require("./login");

router.use("/user", userRoutes);
router.use("/dish", dishRoutes);
router.use("/login", loginRoutes);

module.exports = router;
