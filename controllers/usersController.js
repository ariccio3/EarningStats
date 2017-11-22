const db = require("../models");

module.exports = {

	findAll: function(req, res) {
		db.Stocks
		   	.find(req.query)
      		.sort({ stock: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	},

	findByStock: function(req, res) {
	    db.Stocks
	   		.find({stock:req.params.stock})
	    	.then(dbModel => res.json(dbModel))
      		.catch(err => res.status(422).json(err));
	}
};
