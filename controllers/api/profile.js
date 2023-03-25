const router = require("express").Router();
const User = require("../../models/User");

//API to create new user
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

// API to UPDATE a user
router.put("/{userId}", async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// API route to DELETE a user
router.delete("/:id", async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
