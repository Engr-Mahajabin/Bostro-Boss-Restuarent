const Payment = require("../models/Payment");

// Get user payments
const getPayments = async (req, res) => {
  const email = req.query.email;
  if (!email) return res.send([]);
  const payments = await Payment.find({ email }).sort({ date: -1 });
  res.send(payments);
};

// Add payment record
const addPayment = async (req, res) => {
  const payment = req.body;
  const result = await Payment.create(payment);
  res.send(result);
};

module.exports = { getPayments, addPayment };
