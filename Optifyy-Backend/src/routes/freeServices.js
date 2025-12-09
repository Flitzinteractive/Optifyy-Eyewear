const express = require("express");
const freeServiceRouter = express.Router();
const Service = require("../models/freeServices");
const { validateRequestServiceData } = require("../utils/validation");
const { sendServiceConfirmationEmail } = require("../utils/sendServiceEmail");

freeServiceRouter.post("/request-service", async (req, res) => {
  try {
    validateRequestServiceData(req);
    const { name, emailId, phone, serviceType } = req.body;

    // Save to database
    const savedService = await Service.create({
      name,
      emailId,
      phone,
      serviceType,
    });

    // Send confirmation email in the background
    sendServiceConfirmationEmail(emailId, name, phone, serviceType)
      .then(() => console.log("Service confirmation email sent successfully"))
      .catch((error) =>
        console.warn("Failed to send service confirmation email:", error)
      );

    // Respond immediately
    res.json({
      message: "Service request saved successfully",
      data: savedService,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = freeServiceRouter;
