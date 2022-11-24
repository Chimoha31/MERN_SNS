const router = require("express").Router();
const User = require("../models/Users");

// Get

// Update
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
        // $set=全てのパラメーター。ここではmodelsの全てのUser model。それをpostmanで打つreq.bodyで書き換える。
      });
      return res.status(200).json("Succesfully updated user information!");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res
      .status(403)
      .json("You can update information only on your account");
  }
});

// Delete

module.exports = router;
