const router = require("express").Router();
const User = require("../models/Users");

// Get
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // passwordとupdatedAtは第三者に見られない様に下記のように取り出し、分割代入のothersだけ取得する様にする
    const {password, updatedAt, ...others} = user._doc;
    return res.status(200).json(others);
  } catch (err) {
    return res.status(500).json(err);
  }
});

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
      .json("You can update the information only on your account");
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      return res.status(200).json("Succesfully deleted the information");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res
      .status(403)
      .json("You can delete the nformation only on your account");
  }
});

module.exports = router;
