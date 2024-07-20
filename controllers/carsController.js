const express = require("express");
const router = express.Router();
const { getAllCars, deleteCar} = require("../queries/cars");





//show all cars
router.get("/", async (req, res) => {
    const allCars = await getAllCars();
    if (allCars[0]) {
      res.status(200).json(allCars);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

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