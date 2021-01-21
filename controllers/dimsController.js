const db = require("../models");

module.exports = {
	setDims: function (req, res) {
		db.Users.findOneAndUpdate({}, req)
			.then((data) => {
				res.json(data);
			})
			.catch((err) => res.status(422).json(err));
    },
    
    getDims: function (req, res) {
		db.Users.find({})
			.then((data) => {
				res.json(data);
			})
			.catch((err) => res.status(422).json(err));
	},


};