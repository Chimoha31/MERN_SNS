const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");
const User = require("../models/Users");

// Create Post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    return res.status(200).json(savePost);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Get a single Post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Get All Posts ("/timelineとすると上の"/:id"と識別され、予期せぬエラーが起きるので以下のendpointにする)
router.get("/timeline/:userId", async (req, res) => {
  try {
    // 全ての投稿＝> ①自分の投稿
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    // + ②自分がフォローしている友達の投稿
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    return res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Update Post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({
        $set: req.body,
      });
      return res.status(200).json("Successfully updated your post");
    } else {
      return res.status(403).json("You can't edit someone's post.");
    }
  } catch (err) {
    return res.status(403).json(err);
  }
});

// Delete Post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      return res.status(200).json("Succesfully deleted post!");
    } else {
      return res.status(403).json("You can't delete someone's post.");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Press a particular likes
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // まだその投稿にlikeが押されて無かったら、Arrayにuserを格納
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({
        $push: {
          likes: req.body.userId,
        },
      });
      return res.status(200).json("You succesfully pressed like to the post!");
    } else {
      // 既にlikeを押していたらArrayからuserを外す、
      await post.updateOne({
        $pull: {
          likes: req.body.userId,
        },
      });
      return res.status(403).json("You took off like from the post");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
