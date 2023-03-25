const router = require("express").Router();

const homeRoutes = require("./home-routes");
const userRoutes = require("./user-routes");
const profileRoutes = require("./profile");
const apiRoutes = require("./api");

router.use("/", homeRoutes);
router.use("/user", userRoutes);
router.use("/profile", profileRoutes);
router.use("/api", apiRoutes);

module.exports = router;
