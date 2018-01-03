const router = require("express").Router();
const sortedController = require("../../controllers/sortedController");

// Matches with "/api/sorted"
 router
  .route("/totalpercentup")
  .get(sortedController.findTotalPercentUp)

 router
  .route("/percentinside")
  .get(sortedController.findPercentInside) 

 router
  .route("/percenthalfem")
  .get(sortedController.findPercentHalfEM)

 router
  .route("/doubleem")
  .get(sortedController.findDoubleEM) 

  router
  .route("/outsidepercentup")
  .get(sortedController.findOutsidePercentUp)

 router
  .route("/outsidepercentdown")
  .get(sortedController.findOutsidePercentDown) 

 router
  .route("/avgPercentEM")
  .get(sortedController.findAvgPercentEM)

 router
  .route("/q1percentinside")
  .get(sortedController.findQ1PercentInside)

 router
  .route("/q2percentinside")
  .get(sortedController.findQ2PercentInside) 

 router
  .route("/q3percentinside")
  .get(sortedController.findQ3PercentInside)

 router
  .route("/q4percentinside")
  .get(sortedController.findQ4PercentInside) 

module.exports = router;