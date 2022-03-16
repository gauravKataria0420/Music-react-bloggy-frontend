const router = require("express").Router();
const User = require("../Models/user");
const bcrypt = require("bcrypt");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hasshedPassword = await bcrypt.hash(req.body.password, salt);
    const username = await req.body.username.toLowerCase().replaceAll(" ", "");
    const newUser = new User({
      username: username,
      email: req.body.email,
      password: hasshedPassword,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  // res.status(400).send("Bad request.");
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send("Invalid username and password.");

    const validate = await bcrypt.compare(req.body.password, user.password);
    if (!validate)
      return res.status(400).send("Invalid username and password.");

    const { password, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    // res.send("An unexpected error occured.");
    res.status(500).json(err);
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  const deluser = await username.findById(req.params.id);
  try {
    await deluser.delete();
    res.status(200).json("Username has been deleted...!");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
