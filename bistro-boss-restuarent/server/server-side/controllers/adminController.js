const Payment = require("../models/Payment");
const User = require("../models/User");

// Get stats
const getStats = async (req, res) => {
  const users = await User.countDocuments();
  const orders = await Payment.countDocuments();
  const revenue = await Payment.aggregate([
    { $group: { _id: null, total: { $sum: "$price" } } },
  ]);

  res.send({
    users,
    orders,
    revenue: revenue[0]?.total || 0,
  });
};

module.exports = { getStats };
