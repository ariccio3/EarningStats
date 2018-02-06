import axios from "axios";

export default {
  // Gets the Stock with the given stock ticker
  getStats: function(stock) {
    return axios.get("/api/users/" + stock);
  },
  getSortedData: function(stock) {
    return axios.get("/api/sorted/proscons");
  },
  getWatchList: function() {
    return axios.get("/api/users");
  },
  getStocks: function() {
    return axios.get("/api/sorted/")
  },
  getTotalpercentup: function() {
    return axios.get("/api/sorted/totalpercentup")
  },
  getPercentInside: function() {
    return axios.get("/api/sorted/percentInside")
  },
  getPercentHalfEM: function() {
    return axios.get("/api/sorted/percentHalfEM")
  },
  getDoubleEM: function() {
    return axios.get("/api/sorted/doubleEM")
  },
  getBackToBack: function() {
    return axios.get("/api/sorted/backToBack")
  },
  getOutsidePercentUp: function() {
    return axios.get("/api/sorted/outsidePercentUp")
  },
  getOutsidePercentDown: function() {
    return axios.get("/api/sorted/outsidePercentDown")
  },
  getAvgPercentEM: function() {
    return axios.get("/api/sorted/avgPercentEM")
  },
  getQ1PercentInside: function() {
    return axios.get("/api/sorted/q1PercentInside")
  },
  getQ2PercentInside: function() {
    return axios.get("/api/sorted/q2PercentInside")
  },
  getQ3PercentInside: function() {
    return axios.get("/api/sorted/q3PercentInside")
  },
  getQ4PercentInside: function() {
    return axios.get("/api/sorted/q4PercentInside")
  },
  getAmOver2XemPercent: function() {
    return axios.get("/api/sorted/amOver2XemPercent")
  },
  getAmUnder2XemPercent: function() {
    return axios.get("/api/sorted/amUnder2XemPercent")
  },
  getAmUnder175XemPercent: function() {
    return axios.get("/api/sorted/amUnder175XemPercent")
  },
  getAmUnder150XemPercent: function() {
    return axios.get("/api/sorted/amUnder150XemPercent")
  },
  getAmUnder125XemPercent: function() {
    return axios.get("/api/sorted/amUnder125XemPercent")
  },
  getUnderEMPercent: function() {
    return axios.get("/api/sorted/underEMPercent")
  },
  getAmUnder75XemPercent: function() {
    return axios.get("/api/sorted/amUnder75XemPercent")
  },
  getAboveAvgEM: function() {
    return axios.get("/api/sorted/aboveAvgEM")
  },
  getBelowAvgEM: function() {
    return axios.get("/api/sorted/belowAvgEM")
  },
  getActualPercentOfExpected: function() {
    return axios.get("/api/users");
  }  
};
