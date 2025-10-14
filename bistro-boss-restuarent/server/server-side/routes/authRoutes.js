// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const { generateToken } = require("../controllers/authController");

router.post("/jwt", generateToken);

module.exports = router;
