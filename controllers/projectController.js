const db = require("../models");

module.exports = {
	findAll: function (req, res) {
		console.log("YOU ARE HERE!!!");
		console.log(db.BaseProjects.find({}));
		// db.BaseProjects.find(req.query)
		// 	.then((allProj) => {
		// 		res.json(allProj)
		// }).catch((err) => res.status(422).json(err));

		// db.BaseProjects.find({}, function (err, result) {
		// 	if (err) {
		// 		console.log(err);
		// 	} else {
		// 		res.json(result);
		// 	}
		// 		console.log(result);
		// }).catch((err) => res.status(422).json(err));

		// for (let i = 0; i < BaseProjects.length; i++) {
		// 	res.json({
		// 		projectId: req.BaseProjects[i].projectId,
		// 		projectWidthOptions:
		// 			req.BaseProjects[i].userParams[1].options,
		// 		projectDepthOptions:
		// 			req.BaseProjects[i].userParams[2].options,
		// 		projectHeightOptions:
		// 			req.BaseProjects[i].userParams[3].options,
		// 	});
	},
};
// get project options based on project id (project) ok

// on calculate, post user selections to database (user)

// calculate results and store in userstate, then post to database (user)

// get and display results
