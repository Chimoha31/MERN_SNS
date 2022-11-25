const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("posts endpoint");
});

module.exports = router;
