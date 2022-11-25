const router = require("express").Router();
const User = require("../models/Users");

// Resister (Create User)
router.post("/resister", async (req, res) => {
  try {
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = newUser.save();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    // mongooseにあるfindOne()で探してくるfinOne()内に記載した情報を持っているUserを探しにいく
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("There is no user...");

    // Line23-24でemailが一致しているか確認が取れたら、Line27-29が走りパスワードが一致してるか確認しにいく
    const validPassword = req.body.password === user.password;
    if (!validPassword) return res.status(400).json("Not match your password");
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
