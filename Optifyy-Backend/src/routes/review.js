const express = require("express");
const reviewRouter = express.Router();
const Review = require("../models/review");
const { validateReviewData } = require("../utils/validation");
const { sendReviewConfirmationEmail } = require("../utils/sendReviewEmail");
reviewRouter.post("/review", async (req, res) => {
  try {
    validateReviewData(req);
    const { name, emailId, comment, star } = req.body;
    const review = new Review({ name, emailId, comment, star });
    const savedReview = await review.save();
    sendReviewConfirmationEmail(emailId, name, star, comment)
      .then(() => console.log("Review confirmation email sent successfully"))
      .catch((error) =>
        console.warn("Failed to send review confirmation email:", error)
      );

    // Send response immediately after saving the review
    res.json({ message: "Review saved successfully", data: savedReview });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
reviewRouter.get("/review", async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.json({ message: "Reviews Fetched Successfully", data: reviews });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = reviewRouter;
