const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const PORT = 8000;

app.use(express.json());

// Test
app.get("/", (req, res) => {
  res.send("This is endpoint");
});

// From router
const authRouter = require("./router/auth");
const userRouter = require("./router/users");
const postRouter = require("./router/posts");
const uploadRouter = require("./router/upload");

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Succesfully connected to MongoDB ð");
  })
  .catch((e) => {
    console.log(e);
  });

// Middleware
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/upload", uploadRouter);


// Localãµã¼ãã¼ãç«ã¡ä¸ã
app.listen(PORT, () => console.log("Server is running ð"));
