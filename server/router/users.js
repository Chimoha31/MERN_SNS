const router = require("express").Router();
const User = require("../models/Users");

// Get
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // passwordとupdatedAtは第三者に見られない様に下記のように取り出し、分割代入のothersだけ取得する様にする
    const { password, updatedAt, ...others } = user._doc;
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

// Follow a user
router.put("/:id/follow", async (req, res) => {
  // userIdがparamsのidではない時＝自分のIdでない時＝相手のId(自分以外をfollowする)
  if (req.bpdy.userId !== req.params.id) {
    // followする相手のIdを探しにく
    const user = await User.findById(req.params.id);
    // 自分のId
    const currentUser = await User.findById(req.body.userId);
    // followする相手のfollowersの中に自分のIdが無かったらフォルーできる
    if (!user.followers.includes(req.body.userId)) {
      await user.updateOne({
        $push: {
          followers: req.body.userId,
        },
      });
      //自分のfollowingsも追加する
      await currentUser.updateOne({
        $push: {
          followings: req.params.id,
        },
      });
      return res.status(200).json("Succesfully followed");
    } else {
      return res.status(403).json("You already followed this user");
    }
  } else {
    return res.status(500).json("You can't follow yourself");
  }
});

module.exports = router;
