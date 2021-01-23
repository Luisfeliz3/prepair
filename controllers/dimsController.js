const db = require("../models");

module.exports = {
	getDims: function (req, res) {
		db.Users.find(req.query)
			.then((data) => {
				const temp = data[0].currentProjects[0].userParams;
				res.json(temp);
			})
			.catch((err) => res.status(422).json(err));
    },
    
    saveDims: function (req, res) {
		db.Users.findOneAndUpdate({userParams}, req)
			.then((data) => {
				res.json(data);
			})
			.catch((err) => res.status(422).json(err));
	},


};