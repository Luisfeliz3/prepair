const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const completionSchema = new Schema({
	completionStatus: { type: Number, required: true },
	description: { type: String, required: true },
	completionPercentage: { type: Number, required: true }
});

const Completion = mongoose.model("Completion", completionSchema);

module.exports = Completion;
