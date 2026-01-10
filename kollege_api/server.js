require("dotenv").config();
const express = require("express");
const app = express();
const { logger, logEvents } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3500;

connectDB();

app.use(logger);

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

app.use("/", express.static("public"));
app.use("/api", require("./routes/root"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/paper", require("./routes/paperRoutes"));
app.use("/api/notes", require("./routes/notesRoutes"));
app.use("/api/internal", require("./routes/internalRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));
app.use("/api/time_schedule", require("./routes/timeScheduleRoutes"));
app.use("/api/staff", require("./routes/staffRoutes"));
app.use("/api/student", require("./routes/studentRoutes"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("json")) {
    res.json({ message: "404 Not Found", details: "No paths found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  // Only listen if not running as a Vercel serverless function
  if (require.main === module) {
    app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
  }
});

module.exports = app;

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}:${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});

mongoose.connection.on("uncaughtException", function (err) {
  console.log(err);
});
