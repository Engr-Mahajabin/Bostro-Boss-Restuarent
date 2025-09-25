const express = require("express");
const {
  getCart,
  addCart,
  deleteCart,
} = require("../controllers/cartController");

const router = express.Router();

router.get("/", getCart);
router.post("/", addCart);
router.delete("/:id", deleteCart);

module.exports = router;
