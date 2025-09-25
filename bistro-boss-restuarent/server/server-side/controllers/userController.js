const User = require("../models/User");
const jwt = require("jsonwebtoken");

// JWT issue
const createToken = (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  res.send({ token });
};

// Get all users
const getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

// Check admin
const checkAdmin = async (req, res) => {
  const email = req.params.email;
  if (email !== req.decoded.email) {
    return res.status(403).send({ admin: false });
  }
  const user = await User.findOne({ email });
  res.send({ admin: user?.role === "admin" });
};

// Make admin
const makeAdmin = async (req, res) => {
  const id = req.params.id;
  const result = await User.findByIdAndUpdate(
    id,
    { role: "admin" },
    { new: true }
  );
  res.send(result);
};

// Add user
const addUser = async (req, res) => {
  const user = req.body;
  const existing = await User.findOne({ email: user.email });
  if (existing) {
    return res.send({ message: "User already exists", insertedId: null });
  }
  const newUser = await User.create(user);
  res.send(newUser);
};

// Delete user
const deleteUser = async (req, res) => {
  const id = req.params.id;
  const result = await User.findByIdAndDelete(id);
  res.send(result);
};

module.exports = {
  createToken,
  getUsers,
  checkAdmin,
  makeAdmin,
  addUser,
  deleteUser,
};
