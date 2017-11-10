import axios from "axios";

export default {
  // Gets the User with the given skill
  getUserSkill: function(skill) {
    return axios.get("/api/users/" + skill);
  }
};
