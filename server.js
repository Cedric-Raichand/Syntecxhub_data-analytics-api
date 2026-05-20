require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const analyticsRoutes = require("./routes/analyticsRoutes");

const app = express();


// Middleware
app.use(express.json());


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


// Routes
app.use("/api/analytics", analyticsRoutes);


// Default Route
app.get("/", (req, res) => {
  res.send("Data Analytics API running...");
});


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});