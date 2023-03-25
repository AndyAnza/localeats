const router = require("express").Router();
const userRoutes = require("./user-routes");
const dishRoutes = require("./dish-routes");
const profileRoutes = require("./profile");

router.use("/user", userRoutes);
router.use("/dish", dishRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
