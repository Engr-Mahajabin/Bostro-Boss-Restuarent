// controllers/authController.js
const jwt = require("jsonwebtoken");

const generateToken = (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
  res.send({ token });
};

module.exports = { generateToken };
