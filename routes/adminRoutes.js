const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const auth = require("../middleware/authMiddleware");

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.get("/", auth, (req, res) => {
  res.render("index");
});

router.get("/login", adminController.loginPage);
router.post("/login", adminController.loginAdmin);

router.get("/register", adminController.registerPage);
router.post("/register", upload.single("avatar"), adminController.registerAdmin);

router.get("/logout", adminController.logout);

router.get("/add", auth, adminController.addPage);

router.post(
  "/add",
  auth,
  upload.single("avatar"),
  adminController.addAdmin
);

router.get("/view", auth, adminController.viewAdmins);

router.get("/delete/:id", auth, adminController.deleteAdmin);

router.get("/edit/:id", auth, adminController.editPage);

router.post(
  "/update/:id",
  auth,
  upload.single("avatar"),
  adminController.updateAdmin
);

module.exports = router;