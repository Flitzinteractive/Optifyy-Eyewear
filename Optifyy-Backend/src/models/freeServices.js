const mongoose = require("mongoose");

const freeServiceSchema = new mongoose.Schema(
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
    },
    phone: {
      type: Number,
      required: true,
      min: 1000000000,
      max: 9999999999,
    },
    serviceType: {
      type: String,
      required: true,
      enum: {
        values: ["Free Eye Checkup", "Free Eyewear Repairing"],
        message: `{VALUE} is not a valid Service Type`,
      },
    },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", freeServiceSchema);
