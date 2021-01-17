const db = require("../models");

module.exports = {
	getProjectOptions: function (req, res) {
		for (let i = 0; i < BaseProjects.length; i++) {
			// how to match these to what is clicked?
			res.json({
				projectId: req.BaseProjects[i].projectId,
				projectWidthOptions:
					req.BaseProjects[i].userParams[1].options,
				projectDepthOptions:
					req.BaseProjects[i].userParams[2].options,
				projectHeightOptions:
					req.BaseProjects[i].userParams[3].options,
			});
		}
	},

	// getProTips: function (req, res) {
		// let random = Math.floor(Math.random()*10);
		// db.Protips
		// 	.aggregate([{$sample: {size: 1}}])
		// res.json({
		// 	generatedProTip: req[random].proTipText
		// })
		// console.log(res.json);
	}

// get project options based on project id (project) ok

// get user selections from database (user)

// calculate results and store in userstate, then post to database (user)

// get and display results
