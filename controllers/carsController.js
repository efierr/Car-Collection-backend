const express = require("express");
const router = express.Router();
const { getAllCars} = require("../queries/cars");





//show all cars
router.get("/", async (req, res) => {
    const allCars = await getAllCars();
    if (allCars[0]) {
      res.status(200).json(allCars);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

// 
module.exports = router;