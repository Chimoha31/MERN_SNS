const router = require("express").Router();
// 処理用Node.jsミドルウェアで、主にファイルのアップロードに使用される
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
});

const upload = multer({storage});
// API for uploading image
router.post("/", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("Successfully uploaded the image");
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
