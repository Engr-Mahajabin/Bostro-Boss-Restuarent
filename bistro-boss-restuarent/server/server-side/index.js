const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // mongoose db

const userRoutes = require("./routes/userRoutes");
const menuRoutes = require("./routes/menuRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const cartRoutes = require("./routes/cartRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// DB connect
connectDB();

// Routes
app.use("/users", userRoutes);
app.use("/menu", menuRoutes);
app.use("/reviews", reviewRoutes);
app.use("/carts", cartRoutes);
app.use("/payments", paymentRoutes);
app.use("/bookings", bookingRoutes);
app.use("/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
