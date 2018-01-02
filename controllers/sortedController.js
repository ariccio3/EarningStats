const db = require("../models/Sorted");

module.exports = {

	findAllSorted: function(req, res) {
		db.Sorted
		   	.find(req.query)
      		.sort({ totalPercentUp: -1 })
	      	.then(dbModel => res.json(dbModel))
	      	.catch(err => res.status(422).json(err));
	}
};
