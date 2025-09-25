const express = require("express");
const {
  createToken,
  getUsers,
  checkAdmin,
  makeAdmin,
  addUser,
  deleteUser,
} = require("../controllers/userController");
const verifyToken = require("../middlewares/verifyToken");
const verifyAdmin = require("../middlewares/verifyAdmin");

const router = express.Router();

router.post("/jwt", createToken);
router.get("/", verifyToken, verifyAdmin, getUsers);
router.get("/admin/:email", verifyToken, checkAdmin);
router.patch("/admin/:id", verifyToken, verifyAdmin, makeAdmin);
router.post("/", addUser);
router.delete("/:id", verifyToken, verifyAdmin, deleteUser);

module.exports = router;
