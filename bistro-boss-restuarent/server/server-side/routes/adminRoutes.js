const express = require("express");
const { getStats } = require("../controllers/adminController");
const verifyToken = require("../middlewares/verifyToken");
const verifyAdmin = require("../middlewares/verifyAdmin");

const router = express.Router();

router.get("/stats", verifyToken, verifyAdmin, getStats);

module.exports = router;
