import axios from "axios";

export default {
  // Gets the Stock with the given stock ticker
  getStats: function(stock) {
    return axios.get("/api/users/" + stock);
  },
  getWatchList: function() {
    return axios.get("/api/users");
  },
  getSorted: function() {
    return axios.get("/api/sorted")
  }
};
