const router = require("express").Router();
const category = require("../Models/category");

// CREATE CATEGORY
router.post("/", async (req, res) => {
  const newCategory = new category(req.body);
  try {
    const savedCat = await newCategory.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET CATEGORY
router.get("/", async (req, res) => {
  try {
    const fetchCategory = await category.find();
    res.status(200).json(fetchCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
