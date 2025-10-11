const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  email: String,
  transactionId: String,
  price: Number,
  date: { type: Date, default: Date.now },
  cartItems: [String],
  menuItems: [String],
  status: { type: String, default: "completed" },
});

module.exports = mongoose.model("Payment", paymentSchema, "payments");
