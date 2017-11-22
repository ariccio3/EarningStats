import axios from "axios";

export default {
  // Gets the Stock with the given stock ticker
  getStats: function(stock) {
    return axios.get("/api/users/" + stock);
  }    
}; 
