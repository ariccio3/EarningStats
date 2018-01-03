import axios from "axios";

export default {
  // Gets the Stock with the given stock ticker
  getStats: function(stock) {
    return axios.get("/api/users/" + stock);
  },
  getWatchList: function() {
    return axios.get("/api/users");
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
  getOutsidePercentUp: function() {
    return axios.get("/api/sorted/outsidePercentUp")
  // },
  // getOutsidePercentDown: function() {
  //   return axios.get("/api/sorted/outsidePercentDown")
  // },
  // getAvgPercentEM: function() {
  //   return axios.get("/api/sorted/avgPercentEM")
  // },
  // getQ1PercentInside: function() {
  //   return axios.get("/api/sorted/q1PercentInside")
  // },
  // getQ2PercentInside: function() {
  //   return axios.get("/api/sorted/q2PercentInside")
  // },
  // getQ3PercentInside: function() {
  //   return axios.get("/api/sorted/q3PercentInside")
  // },
  // getQ4PercentInside: function() {
  //   return axios.get("/api/sorted/q4PercentInside")
  }
};
