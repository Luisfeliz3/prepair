const db = require("../models");

module.exports = {
	getAllProjects: function (req, res) {
		res.json({
			// _id: req.user._id,
			// username: req.user.username,
			// email: req.user.email,
			// comments: req.user.comments
		});
	},
};
