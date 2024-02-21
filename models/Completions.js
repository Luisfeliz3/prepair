import mongoose from "mongoose";

const Schema = mongoose.Schema;

const completionSchema = new Schema({
	completionStatus: { type: Number, required: true },
	description: { type: String, required: true },
	completionPercentage: { type: Number, required: true }
});

const Completions = mongoose.model("Completions", completionSchema);

export default Completions;
