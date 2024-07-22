const express = require("express");
const router = express.Router();
const { getAllCars, createCar, getCar, deleteCar, updateCar} = require("../queries/cars");
const { checkName, checkBoolean } = require("../validations/checkCars.js");



//SHOW  all cars
router.get("/", async (req, res) => {
    const allCars = await getAllCars();
    if (allCars[0]) {
      res.status(200).json(allCars);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });


// SHOW one car
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const car = await getCar(id);
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

  
// CREATE one car

router.post("/", checkName, checkBoolean, async (req, res) => {
  try {
    const car = await createCar(req.body);
    res.json(car);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE one car

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedCar = await deleteCar(id);
  if (deletedCar.id) {
    res.status(200).json(deletedCar);
  } else {
    res.status(404).json("Car not found");
  }
});

// UPDATE one car

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedCar = await updateCar(id, req.body);
  res.status(200).json(updatedCar);
});


module.exports = router;