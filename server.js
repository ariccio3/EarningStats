const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
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
  process.env.MONGODB_URI || "mongodb://localhost/earnings_data",
    {
    	useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// mongoimport -h ds133876.mlab.com:33876 -d heroku_bqh4kgg0 -c earnings_data -u heroku_bqh4kgg0 -p ksue5hj0s6vham9a6nmhbdom6r --file earnings_data.csv --type csv --headerline
 // || "mongodb://heroku_bqh4kgg0:ksue5hj0s6vham9a6nmhbdom6r@ds133876.mlab.com:33876/heroku_bqh4kgg0"