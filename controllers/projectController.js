const db = require("../models");

module.exports = {
	findAll: function (req, res) {
		db.BaseProjects.find(req.query).sort({projectId: -1})
			.then((allProj) => {
				res.json(allProj);
			})
			.catch((err) => res.status(422).json(err));
	},
};