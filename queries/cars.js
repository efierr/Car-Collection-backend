// queries/cars.js
const db = require("../db/dbConfig.js");



// queries/cars.js
const getAllCars = async () => {
    try {
      const allCars = await db.any("SELECT * FROM cars");
      return allCars;
    } catch (error) {
      return error;
    }
  };


// CREATE
const createCar = async (car) => {
  try {
    const car = await db.one(
      "INSERT INTO cars( Make VARCHAR(50),Model VARCHAR(50),Year INT,Color VARCHARPrice DECIMAL(10, 2),IsFavorite BOOLEAN) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [car.Make, car.Model, car.Year, car.Color, car.Price, car.IsFavorite]
    );
    return newCar;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllCars,
  createCar,
  getCar,
};
