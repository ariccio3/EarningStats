
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/earnings_data",
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
        type: Number,
        required: false 
      },
  openPriceAfterEarnings: {
        type: Number, 
        required: true 
      },
  expectedMove: { 
        type: Number,
        required: true 
      },
  actualMove: { 
        type: Number,
        required: true 
      },
  absValActualMove: { 
        type: Number, 
        required: false 
      },
  actualPercentOfExpectedMove: { 
        type: Number, 
        required: false 
      },
  insideOutside: { 
        type: String, 
        required: false 
      },
  expectedPercentMove: { 
        type: Number, 
        required: false 
      },
  actualPercentMove: { 
        type: Number, 
        required: false 
      }
});

const Stocks = mongoose.model("Stocks", StockSchema);

module.exports = Stocks;
