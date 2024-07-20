// queries/bookmarks.js
const db = require("../db/dbConfig.js");



// queries/bookmarks.js
const getAllCars = async () => {
    try {
      const allCars = await db.any("SELECT * FROM cars");
      return allCars;
    } catch (error) {
      return error;
    }
  };

module.exports = { getAllCars};