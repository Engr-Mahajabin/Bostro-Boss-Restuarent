const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: String,
  image: String,
  category: String,
  price: Number,
  recipe: String,
});

module.exports = mongoose.model("Menu", menuSchema);
