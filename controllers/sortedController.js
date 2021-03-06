const db = require("../models/Sorted");

module.exports = {

	findAll: function(req, res) {
		db.Sorted
		   	.find(req.params.stock)
      		.sort({ stock: 1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findStock: function(req, res) {
		db.Sorted
		   	.find(req.params.stock)
		   	.select('stock')
      		.sort({ stock: 1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findTotalPercentUp: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock totalPercentUp')		   	
      		.sort({ totalPercentUp: -1 })   		
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findPercentInside: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock percentInside')		   	
      		.sort({ percentInside: -1 })     		
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findPercentHalfEM: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock percentHalfEM')		   	
      		.sort({ percentHalfEM: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findDoubleEM: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock doubleEM')		   	
      		.sort({ doubleEM: 1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findBackToBack: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock btbPercent insideOutside')		   	
      		.sort({ btbPercent: 1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findOutsidePercentUp: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock outsidePercentUp')		   	
      		.sort({ outsidePercentUp: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findOutsidePercentDown: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock outsidePercentDown')		   	
      		.sort({ outsidePercentDown: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findAvgPercentEM: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock avgPercentEM')		   	
      		.sort({ avgPercentEM: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findQ1PercentInside: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock q1PercentInside')		   	
      		.sort({ q1PercentInside: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findQ2PercentInside: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock q2PercentInside')		   	
      		.sort({ q2PercentInside: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findQ3PercentInside: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock q3PercentInside')		   	
      		.sort({ q3PercentInside: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findQ4PercentInside: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock q4PercentInside')		   	
      		.sort({ q4PercentInside: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findAmOver2XemPercent: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock amOver2XemPercent')		   	
      		.sort({ amOver2XemPercent: 1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findAmUnder2XemPercent: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock amUnder2XemPercent')		   	
      		.sort({ amUnder2XemPercent: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findAmUnder150XemPercent: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock amUnder150XemPercent')		   	
      		.sort({ amUnder150XemPercent: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findAmUnder125XemPercent: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock amUnder125XemPercent')		   	
      		.sort({ amUnder125XemPercent: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findAmUnder175XemPercent: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock amUnder175XemPercent')		   	
      		.sort({ amUnder175XemPercent: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findAmUnder75XemPercent: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock amUnder75XemPercent')		   	
      		.sort({ amUnder75XemPercent: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findUnderEMPercent: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock underEMPercent')		   	
      		.sort({ underEMPercent: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findAboveAvgEM: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock aboveAvgEM')		   	
      		.sort({ aboveAvgEM: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findBelowAvgEM: function(req, res) {
		db.Sorted
		   	.find(req.query)
		   	.select('stock belowAvgEM')		   	
      		.sort({ belowAvgEM: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	}									
};
