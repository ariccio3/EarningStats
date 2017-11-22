const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const logger = require("morgan");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/earnings_data" || "mongodb://admin:admin@ds161194.mlab.com:61194/heroku_p9xxsj90",
    {
    	useMongoClient: true
  }
);
// var db = mongoose.connection;

// db.on("error", function(error) {
// 	console.log("Mongoose Error: ", error);
// });

// db.once("open", function() {
// 	console.log("Mongoose connection successful.");
// });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
