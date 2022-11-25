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

// Update Post

module.exports = router;
