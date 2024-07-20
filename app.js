// Dependencies
const cors = require("cors");
const express = require("express");

// Controllers
const carsController = require("./controllers/carsController");

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Cars Collection");
});

app.use("/cars", carsController);

// 404 Page
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// Export
module.exports = app;
