const router = require("express").Router();
const sortedController = require("../../controllers/sortedController");

// Matches with "/api/sorted"
 // router
 //  .route("/proscons")
 //  .get(sortedController.findTotalPercentUp)
 //  .get(sortedController.findPercentInside)


  router
  .route("/")
  .get(sortedController.findStock)

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
  .route("/backtoback")
  .get(sortedController.findBackToBack) 

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

 router
  .route("/amover2xempercent")
  .get(sortedController.findAmOver2XemPercent) 

 router
  .route("/amunder2xempercent")
  .get(sortedController.findAmUnder2XemPercent) 

 router
  .route("/amunder150xempercent")
  .get(sortedController.findAmUnder150XemPercent) 

 router
  .route("/amunder125xempercent")
  .get(sortedController.findAmUnder125XemPercent) 

 router
  .route("/amunder175xempercent")
  .get(sortedController.findAmUnder175XemPercent) 

 router
  .route("/amunder75xempercent")
  .get(sortedController.findAmUnder75XemPercent) 

 router
  .route("/underempercent")
  .get(sortedController.findUnderEMPercent) 

 router
  .route("/aboveavgem")
  .get(sortedController.findAboveAvgEM) 

 router
  .route("/belowavgem")
  .get(sortedController.findBelowAvgEM) 

module.exports = router;