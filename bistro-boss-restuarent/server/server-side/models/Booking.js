const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userEmail: String,
  bookingDate: Date,
  guests: Number,
  table: String,
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Booking", bookingSchema);
