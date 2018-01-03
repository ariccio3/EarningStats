const db = require("../models/Sorted");

module.exports = {

	findTotalPercentUp: function(req, res) {
		db.Sorted
		   	.find(req.query)
      		.sort({ totalPercentUp: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findPercentInside: function(req, res) {
		db.Sorted
		   	.find(req.query)
      		.sort({ percentInside: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findPercentHalfEM: function(req, res) {
		db.Sorted
		   	.find(req.query)
      		.sort({ percentHalfEM: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findDoubleEM: function(req, res) {
		db.Sorted
		   	.find(req.query)
      		.sort({ doubleEM: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findOutsidePercentUp: function(req, res) {
		db.Sorted
		   	.find(req.query)
      		.sort({ outsidePercentUp: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findOutsidePercentDown: function(req, res) {
		db.Sorted
		   	.find(req.query)
      		.sort({ outsidePercentDown: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findAvgPercentEM: function(req, res) {
		db.Sorted
		   	.find(req.query)
      		.sort({ avgPercentEM: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findQ1PercentInside: function(req, res) {
		db.Sorted
		   	.find(req.query)
      		.sort({ q1PercentInside: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findQ2PercentInside: function(req, res) {
		db.Sorted
		   	.find(req.query)
      		.sort({ q2PercentInside: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findQ3PercentInside: function(req, res) {
		db.Sorted
		   	.find(req.query)
      		.sort({ q3PercentInside: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},
	findQ4PercentInside: function(req, res) {
		db.Sorted
		   	.find(req.query)
      		.sort({ q4PercentInside: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	}									
};
