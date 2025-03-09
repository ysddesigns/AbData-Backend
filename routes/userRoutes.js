const auth = require("../middleware/authMiddleware");
const express = require("express");

const router = express.Router();

router.get("/profile", auth, (req, res) => {
  res.json({ message: "This is protected routes", user: req.user });
});

module.exports = router;
