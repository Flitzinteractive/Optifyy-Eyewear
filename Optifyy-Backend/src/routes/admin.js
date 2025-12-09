const express = require("express");
const adminRouter = express.Router();
const jwt = require("jsonwebtoken");
const { adminAuth } = require("../middleware/auth");
const Service = require("../models/freeServices");
adminRouter.post("/admin/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hardcoded admin credentials from environment variables
    const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      return res.status(401).json({ message: "Invalid admin credentials" });
    }

    // Create JWT token
    const token = jwt.sign({ username }, process.env.JWT_SECRET);

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      path: "/",
      expires: new Date(Date.now() + 30 * 24 * 3600 * 1000),
    });

    res.json({ message: "Admin login successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Logout
adminRouter.post("/admin/logout", (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
    secure: true,
    sameSite: "None",
    path: "/",
  });
  res.json({ message: "Logged out successfully" });
});

adminRouter.get("/admin/services", adminAuth, async (req, res) => {
  try {
    const services = await Service.find({}).sort({ createdAt: -1 });
    res.json({
      message: "Service requests fetched successfully",
      data: services,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
adminRouter.patch("/admin/services/:id", adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body; // e.g., { isCompleted: true, name: "New Name" }

    // Validate that at least one field is provided to update
    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ message: "No update fields provided" });
    }

    // Define allowed fields to update
    const allowedUpdates = [
      //   "name",
      //   "emailId",
      //   "phone",
      //   "serviceType",
      "isCompleted",
    ];
    const isValidUpdate = Object.keys(updates).every((key) =>
      allowedUpdates.includes(key)
    );

    if (!isValidUpdate) {
      return res.status(400).json({ message: "Invalid update fields" });
    }

    const service = await Service.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true } // Return updated doc, validate schema
    );

    if (!service) {
      return res.status(404).json({ message: "Service request not found" });
    }

    res.json({ message: "Service updated successfully", data: service });
  } catch (error) {
    console.error("Service patch error:", error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = adminRouter;
