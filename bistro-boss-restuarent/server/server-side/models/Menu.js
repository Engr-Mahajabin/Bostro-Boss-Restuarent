const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  recipe: String,
  image: String,
});

// 3rd parameter = exact collection name in MongoDB
module.exports = mongoose.model("Menu", menuSchema, "menu");
