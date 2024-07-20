const express = require("express");
const router = express.Router();


// controllers/carController.js
const {
  getAllCars,
  getCar,
  createCar,
} = require("../queries/cars");





//show all cars
// INDEX
router.get("/", async (req, res) => {
    const allCars = await getAllCars();
    if (allCars[0]) {
      res.status(200).json(allCars);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

  
// CREATE
router.post("/", async (req, res) => {
  try {
    const car = await createCar(req.body);
    res.json(car);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// 
module.exports = router;