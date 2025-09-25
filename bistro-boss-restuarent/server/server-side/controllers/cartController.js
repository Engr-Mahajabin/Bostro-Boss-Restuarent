const Cart = require("../models/Cart");

// Get user cart
const getCart = async (req, res) => {
  const email = req.query.email;
  if (!email) return res.send([]);
  const items = await Cart.find({ userEmail: email });
  res.send(items);
};

// Add to cart
const addCart = async (req, res) => {
  const item = req.body;
  const result = await Cart.create(item);
  res.send(result);
};

// Delete cart item
const deleteCart = async (req, res) => {
  const id = req.params.id;
  const result = await Cart.findByIdAndDelete(id);
  res.send(result);
};

module.exports = { getCart, addCart, deleteCart };
