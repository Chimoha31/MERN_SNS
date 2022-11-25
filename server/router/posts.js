const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");

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


module.exports = router;
