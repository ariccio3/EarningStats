const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users/:stock"
router
  .route("/:stock")
  .get(usersController.findByStock);

// Matches with "/api/users"
router
  .route("/")
  .get(usersController.findAll)

// Matches with "/api/users"
router
  .route("/setup")
  .get(usersController.findActualPercentOfEM)

module.exports = router;