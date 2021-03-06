const db = require("../models");

module.exports = {
	getPricing: function (req, res) {
		db.Pricings.find(req.query).sort({productId: -1})
			.then((prices) => {
				res.json(prices);
			})
			.catch((err) => res.status(422).json(err));
	},
};
