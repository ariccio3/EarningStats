import axios from "axios";

export default {
  // Gets the User with the given stock
  getStats: function(stock) {
    return axios.get("/api/users/" + stock);
  }
};
