
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sortedSchema = new Schema({
  stock: { 
        type: String, 
        required: true 
      },
  totalReports: { 
        type: Number, 
        required: true 
      },
  totalUp: { 
        type: Number, 
        required: true 
      },
  totalDown: { 
        type: Number,
        required: false 
      },
  totalPercentUp: {
        type: Number, 
        required: true 
      },
  numInside: { 
        type: Number,
        required: true 
      },
  numOutside: { 
        type: Number,
        required: true 
      },
  percentInside: { 
        type: Number, 
        required: false 
      },
  numHalfEM: { 
        type: Number, 
        required: false 
      },
  percentHalfEM: { 
        type: Number, 
        required: false 
      },
  doubleEM: { 
        type: Number, 
        required: false 
      },
  outsideNumUp: { 
        type: Number, 
        required: false 
      },
  outsidePercentUp: { 
        type: Number, 
        required: false 
      },
  outsideNumDown: { 
        type: Number, 
        required: false 
      },
  outsidePercentDown: { 
        type: Number, 
        required: false 
      },
  avgPercentEM: { 
        type: Number, 
        required: false 
      },
  numBelowAvgEM: { 
        type: Number, 
        required: false 
      },
  numAboveAvgEM: { 
        type: Number, 
        required: false 
      },
  q1Total: { 
        type: Number, 
        required: false 
      },
  q1NumInside: { 
        type: Number, 
        required: false 
      },
  q1PercentInside: { 
        type: Number, 
        required: false 
      },
  q2Total: { 
        type: Number, 
        required: false 
      },
  q2NumInside: { 
        type: Number, 
        required: false 
      },
  q2PercentInside: { 
        type: Number, 
        required: false 
      },
  q3Total: { 
        type: Number, 
        required: false 
      },
  q3NumInside: { 
        type: Number, 
        required: false 
      },
  q3PercentInside: { 
        type: Number, 
        required: false 
      },
  q4Total: { 
        type: Number, 
        required: false 
      },
  q4NumInside: { 
        type: Number, 
        required: false 
      },
  q4PercentInside: { 
        type: Number, 
        required: false 
      }                                                                                                            
});

const Sorted = mongoose.model("Sorts", sortedSchema);

module.exports = Sorted;
