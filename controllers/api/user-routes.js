const router = require("express").Router();
const User = require("../../models/User");

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: "No user with that id." });
      return;
    }
    const user = userData.get({ plain: true });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      user_name: req.body.user_name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
