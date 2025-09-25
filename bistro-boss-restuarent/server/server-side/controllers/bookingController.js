const Booking = require("../models/Booking");

// Get all bookings
const getBookings = async (req, res) => {
  const bookings = await Booking.find();
  res.send(bookings);
};

// Add booking
const addBooking = async (req, res) => {
  const booking = req.body;
  const result = await Booking.create(booking);
  res.send(result);
};

// Delete booking
const deleteBooking = async (req, res) => {
  const id = req.params.id;
  const result = await Booking.findByIdAndDelete(id);
  res.send(result);
};

module.exports = { getBookings, addBooking, deleteBooking };
