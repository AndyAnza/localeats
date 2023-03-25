const router = require("express").Router();
const { User, Dish } = require("../models");

//Get route profile/new
router.get("/new", async (req, res) => {
  try {
    const newUserData = await User.findAll({});
    const newUser = newUserData.map((user) => user.get({ plain: true }));
    console.log(newUser);
    res.render("profile", { newUser });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/new", async (req, res) => {
  try {
    const { user_name, email, phone, location, password } = req.body;
    if (!user_name || !email || !password) {
      return res.status(400).json({ error: "Missing required properties" });
    }
    const newUser = await User.create({
      user_name,
      email,
      phone,
      location,
      password,
    });
    res.status(202).json({ message: "New User created", user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
