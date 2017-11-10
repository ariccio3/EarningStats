
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mentorlist" || "mongodb://admin:admin@ds161194.mlab.com:61194/heroku_p9xxsj90",
  {
    useMongoClient: true
  }
);

const UsersSchema = new Schema({
  firstName: { 
        type: String, 
        required: true 
      },
  lastName: { 
        type: String, 
        required: true 
      },
  password: { 
        type: String, 
        required: true 
      },
  photo: { 
        type: String,
        required: false 
      },
  city: {
        type: String, 
        required: true 
      },
  state: { 
        type: String,
        required: true 
      },
  zipcode: { 
        type: String,
        required: true 
      },
  aboutMe: { 
        type: String, 
        required: false 
      },
  skills: { 
        type: String, 
        required: false 
      },
  cost: { 
        type: String, 
        required: false 
      }
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
