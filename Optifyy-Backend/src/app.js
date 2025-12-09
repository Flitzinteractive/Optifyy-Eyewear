const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const reviewRouter = require("./routes/review");
const freeServiceRouter = require("./routes/freeServices");
const adminRouter = require("./routes/admin");
const app = express();
const connectDB = require("./config/database");
app.use(express.json());
app.use(cookieParser());

require("dotenv").config();
app.use(
  cors({
    origin: ["http://localhost:5173", "https://optifyy.vercel.app"],
    credentials: true,
  })
);
app.use("/", reviewRouter);
app.use("/", freeServiceRouter);
app.use("/", adminRouter);
connectDB()
  .then(() => {
    console.log("Database Connection Established...");
    app.listen(process.env.PORT, (req, res) => {
      console.log(`Server is listening on port ${process.env.PORT}...`);
    });
  })
  .catch((err) => console.error("Database Cannot be connected "));
