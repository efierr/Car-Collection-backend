// queries/bookmarks.js
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
const deleteCar = async (id) => {
  try {
    const deletedCar = await db.one("DELETE FROM cars WHERE id = $1 RETURNING *", id);
    return deletedCar;
  } catch (error){
return error;
  }
}


  /*
  const deleteColor = async (id) => {
  try {
    const deletedColor = await db.one("DELETE FROM colors WHERE id = $1 RETURNING *", id);
    return deletedColor;
  } catch (error) {
    return error;

  }
}
  */

module.exports = { getAllCars, deleteCar };