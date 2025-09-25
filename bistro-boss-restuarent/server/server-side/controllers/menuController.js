const Menu = require("../models/Menu");

// Get all menu items
const getMenu = async (req, res) => {
  const items = await Menu.find();
  res.send(items);
};

// Add menu item
const addMenu = async (req, res) => {
  const newItem = req.body;
  const result = await Menu.create(newItem);
  res.send(result);
};

// Delete menu item
const deleteMenu = async (req, res) => {
  const id = req.params.id;
  const result = await Menu.findByIdAndDelete(id);
  res.send(result);
};

module.exports = { getMenu, addMenu, deleteMenu };
