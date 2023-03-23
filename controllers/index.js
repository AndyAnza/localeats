const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const dashboardRoutes = require("./dashboard");
const userRoutes = require("./user-routes");

router.use("/", homeRoutes);
router.use("/user", userRoutes);
router.use("/api", apiRoutes);
router.use("/my-dashboard", dashboardRoutes);

module.exports = router;
