const router = require("express").Router();
const sortedController = require("../../controllers/sortedController");

 router
  .route("/")
  .get(sortedController.findAllSorted)

module.exports = router;