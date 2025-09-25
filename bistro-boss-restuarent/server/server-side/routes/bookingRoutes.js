const express = require("express");
const {
  getBookings,
  addBooking,
  deleteBooking,
} = require("../controllers/bookingController");

const router = express.Router();

router.get("/", getBookings);
router.post("/", addBooking);
router.delete("/:id", deleteBooking);

module.exports = router;
