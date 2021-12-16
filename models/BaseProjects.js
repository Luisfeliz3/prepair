const mongoose = require("mongoose");

const BaseProjectsSchema = new mongoose.Schema({
	projectName: { type: String, required: true },
	projectId: { type: Number, required: true },
	description: { type: String, required: true },
	materials: [
		Object
	],
	tools: [String],
	optional: [String],
	userParams: [
		Object
	],
	imgMain: { type: String, required: true },
	imgEx: { type: String, required: true },
});

const BaseProjects = mongoose.model("BaseProjects", BaseProjectsSchema);
module.exports = BaseProjects;
