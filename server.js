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
  process.env.MONGODB_URI || "mongodb://localhost/earnings_data" || "mongodb://heroku_bqh4kgg0:ksue5hj0s6vham9a6nmhbdom6r@ds133876.mlab.com:33876/heroku_bqh4kgg0",
    {
    	useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// Heroku database update import CSV
// mongoimport -h ds133876.mlab.com:33876 -d heroku_bqh4kgg0 -c stocks -u heroku_bqh4kgg0 -p ksue5hj0s6vham9a6nmhbdom6r --file stocks.csv --type csv --headerline
// mongoimport -h ds133876.mlab.com:33876 -d heroku_bqh4kgg0 -c sorts -u heroku_bqh4kgg0 -p ksue5hj0s6vham9a6nmhbdom6r --file sorts.csv --type csv --headerline

// Robo 3T database update import CSV
// mongoimport -d earnings_data -c stocks --type csv --file stocks.csv --headerline
// mongoimport -d earnings_data -c sorts --type csv --file sorts.csv --headerline