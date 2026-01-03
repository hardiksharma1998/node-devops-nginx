const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Health check (VERY important for DevOps)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

// Main route
app.get("/", (req, res) => {
  res.send("Hello DevOps from Node.js via Nginx 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
