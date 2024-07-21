const express = require("express");
const router = express.Router();
const { getAllCars, deleteCar, createCar} = require("../queries/cars");
//controller/colorsController.js
const { checkName } = require("../validations/checkCars.js");
const { checkBoolean } = require("../validations/checkCars.js");




//show all cars
router.get("/", async (req, res) => {
    const allCars = await getAllCars();
    if (allCars[0]) {
      res.status(200).json(allCars);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

  
// CREATE
router.post("/", checkName,checkBoolean, async (req, res) => {
  try {
    const car = await createCar(req.body);
    res.json(car);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// delete
  router.delete("/:id", async (req, res) => {
const {id} = req.params;
const deletedCar = await deleteCar(id)
if (deletedCar.id) {
    res.status(200).json(deletedCar)
} else {
    res.status(404).json("car not found")
}
  })


  /*
  colors.delete("/:id", async (req, res) => {
  const {id} = req.params
  const deletedColor = await deleteColor(id)
  res.status(200).json(deletedColor);
})
  */
module.exports = router;