const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    emailId: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      // unique: true,
    },
    comment: {
      type: String,
      required: true,
    },
    star: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
