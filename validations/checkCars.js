const checkName = (req, res, next) => {
    if (req.body) {
      return next();
    } else {
      res.status(400).json({ error: "Name is required" });
    }
  };
  
  const checkBoolean = (req, res, next) => {
    if (
      typeof req.body.is_favorite === "boolean" ||
      req.body.is_favorite === "true" ||
      req.body.is_favorite == undefined ||
      req.body.is_favorite === "false"
    ) {
      next();
    } else {
      res.status(400).json({ error: "is_favorite must be a boolean value" });
    }
  };
  
  module.exports = { checkName, checkBoolean };
  