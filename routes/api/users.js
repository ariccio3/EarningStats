const router = require("express").Router();
const usersController = require("../../controllers/usersController");
// const sortedController = require("../../controllers/sortedController");

// Matches with "/api/users/:stock"
router
  .route("/:stock")
  .get(usersController.findByStock);

// Matches with "/api/users"
router
  .route("/")
  .get(usersController.findAll)

// Matches with "/api/sorted"
 // router
 //  .route("/")
 //  .get(sortedController.findAllSorted)  

module.exports = router;