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
};

// signup: function (req, res) {
// 	db.User.create({
// 	 username: req.body.username,
// 		email: req.body.email,
// 		password: req.body.password
// 	})
//   .then(() => {res.redirect(307, "/api/user/login") })
//   .catch((err) => { res.status(401).json(err) });
// },

// get project options based on project id (project) ok

// get user selections from database (user)

// calculate results and store in userstate, then post to database (user)

// get and display results
