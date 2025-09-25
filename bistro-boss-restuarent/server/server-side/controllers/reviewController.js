const Review = require("../models/Review");

// Get all reviews
const getReviews = async (req, res) => {
  const reviews = await Review.find();
  res.send(reviews);
};

// Add review
const addReview = async (req, res) => {
  const review = req.body;
  const result = await Review.create(review);
  res.send(result);
};

module.exports = { getReviews, addReview };
