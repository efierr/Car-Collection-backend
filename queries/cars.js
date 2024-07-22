// queries/cars.js
const db = require("../db/dbConfig.js");



//show all cars 
const getAllCars = async () => {
    try {
      const allCars = await db.any("SELECT * FROM cars");
      return allCars;
    } catch (error) {
      return error;
    }
  };

 // get one car
  const getCar = async (id) => {
    try {
      const oneCar = await db.one("SELECT * FROM cars WHERE id=$1", id);
      return oneCar;
    } catch (error) {
      return error;
    }
  };

// CREATE/Add one car

const createCar = async (car) => {
  try {
    const newCar = await db.one(
      "INSERT INTO cars( make, model,year ,color, price, is_favorite ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [car.make, car.model, car.year, car.color, car.price, car.isfavorite]
    );
    return newCar;
  } catch (error) {
    return error;
  }
};

// DELETE one car

const deleteCar = async (id) => {
  try {
    const deletedCar = await db.one(
      "DELETE FROM cars WHERE id = $1 RETURNING *",
      id
    );
    return deletedCar;
  } catch (error) {
    return error;
  }
};

// UPDATE one car

const updateCar = async (id, car) => {
  try {
    const updatedCar = await db.one(
      "UPDATE cars SET make=$1, model=$2, year=$3, color=$4, price=$5, is_favorite=$6 where id=$7 RETURNING *",
      [car.make, car.model, car.year, car.color, car.price, car.is_favorite, id]
    );
    return updatedCar;
  } catch (error) {
    return error;
  }
};


module.exports = {getAllCars, createCar, getCar, deleteCar, updateCar};
