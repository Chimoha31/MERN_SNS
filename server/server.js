const express = require("express");
const app = express();
const mongoose = require("mongoose");
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
const uploadRouter = require("./router/upload")

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Succesfully connected to MongoDB 🚀");
  })
  .catch((e) => {
    console.log(e);
  });

// Middleware
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/upload", uploadRouter)

// Localサーバーを立ち上げ
app.listen(PORT, () => console.log("Server is running 😎"));
