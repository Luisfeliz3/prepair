import mongoose from "mongoose";

const Schema = mongoose.Schema;

const proTipSchema = new Schema({
	proTipId: { type: Number, required: true },
	proTipText: { type: String, required: true }
});

const Protips = mongoose.model("Protips", proTipSchema);

export default Protips;
