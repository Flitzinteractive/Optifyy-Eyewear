const jwt = require("jsonwebtoken");

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Please Allow Cookie In Browser" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // if (!decoded.isAdmin) {
    //   return res.status(403).json({ message: "Admin access required" });
    // }

    req.admin = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};
module.exports = { adminAuth };
