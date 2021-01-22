const db = require("../models");

module.exports = {
	getDims: function (req, res) {
		db.Users.find({userParams}, req)
			.then((data) => {
				res.json(data);
			})
			.catch((err) => res.status(422).json(err));
    },
    
    // setDims: function (req, res) {
	// 	db.Users.findOneAndUpdate({userParams}, req)
	// 		.then((data) => {
	// 			res.json(data);
	// 		})
	// 		.catch((err) => res.status(422).json(err));
	// },


};