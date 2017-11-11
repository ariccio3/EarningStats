
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/earnings_data" || "mongodb://admin:admin@ds161194.mlab.com:61194/heroku_p9xxsj90",
  {
    useMongoClient: true
  }
);

const StockSchema = new Schema({
  stock: { 
        type: String, 
        required: true 
      },
  quarter: { 
        type: String, 
        required: true 
      },
  date: { 
        type: String, 
        required: true 
      },
  priceBeforeEarnings: { 
        type: String,
        required: false 
      },
  openPriceAfterEarnings: {
        type: String, 
        required: true 
      },
  expectedMove: { 
        type: String,
        required: true 
      },
  actualMove: { 
        type: String,
        required: true 
      },
  absValActualMove: { 
        type: String, 
        required: false 
      },
  actualPercentOfExpectedMove: { 
        type: String, 
        required: false 
      },
  insideOutside: { 
        type: String, 
        required: false 
      },
  expectedPercentMove: { 
        type: String, 
        required: false 
      },
  actualPercentMove: { 
        type: String, 
        required: false 
      }
});

const Stocks = mongoose.model("Stocks", StockSchema);

module.exports = Stocks;
