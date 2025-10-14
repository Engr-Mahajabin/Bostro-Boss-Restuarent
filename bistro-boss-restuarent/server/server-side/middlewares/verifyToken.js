const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  console.log("Inside verify token", req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized access" });
  }
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log("JWT Verify Error:", err);
      return res.status(401).send({ message: "Unauthorized access" });
    }
    console.log("✅ Decoded Token:", decoded);
    req.decoded = decoded;
    next();
  });
};

module.exports = verifyToken;
