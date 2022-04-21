const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome in Blog backend");
});

module.exports = router;
