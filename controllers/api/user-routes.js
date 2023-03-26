const router = require("express").Router();
const User = require("../../models/User");

// Get One User for LogIn
router.get("/login/:id", async (req, res) => {
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

//create new user
router.post("/new", async (req, res) => {
  try {
    const userData = await User.create({
      user_name: req.body.user_name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
    });
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

  
    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {

  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
