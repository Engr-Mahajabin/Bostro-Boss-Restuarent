const express = require("express");
const {
  getMenu,
  addMenu,
  deleteMenu,
} = require("../controllers/menuController");
const verifyToken = require("../middlewares/verifyToken");
const verifyAdmin = require("../middlewares/verifyAdmin");

const router = express.Router();

router.get("/", getMenu);
router.post("/", verifyToken, verifyAdmin, addMenu);
router.delete("/:id", verifyToken, verifyAdmin, deleteMenu);

module.exports = router;
