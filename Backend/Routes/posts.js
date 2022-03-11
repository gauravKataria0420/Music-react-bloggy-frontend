const router = require("express").Router();
const User = require("../Models/user");
const Post = require("../Models/Post");

// CREAT POST
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }

  // I have problem in this api when i creating a post again it will be throw the error of 500 code
});

// UPDATE POST
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("your account has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(401).json("User not found");
    }
  } else {
    res.status(401).json("you can Delete only your account....!");
  }
});
// DELETE POST

// GET POST
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...withoutPassword } = user._doc;
    res.status(200).json(withoutPassword);
  } catch (err) {
    res.status(500).json("user not get");
  }
});

module.exports = router;
