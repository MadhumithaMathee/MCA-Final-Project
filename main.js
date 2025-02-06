const express = require("express");
const mongoose = require("mongoose");
const jobRoutes = require("./job.routes"); // Import the job route

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/jobPortal", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use the job route
app.use("/api/job", jobRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
