const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/stocks/:stock"
router
  .route("/:stock")
  .get(usersController.findByStock);

router
  .route("/")
  .get(usersController.findAll)

module.exports = router;