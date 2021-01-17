const db = require("../models");

module.exports = {
	findAll: function (req, res) {
		db.BaseProjects.find({}).toArray(function(err, res) {
			if (err) throw err;
			console.log(res);
		})
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
		}
	};
// get project options based on project id (project) ok

// on calculate, post user selections to database (user)

// calculate results and store in userstate, then post to database (user)

// get and display results
