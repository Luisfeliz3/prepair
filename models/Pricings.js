import mongoose from "mongoose";

const Schema = mongoose.Schema;

const pricingSchema = new Schema({
	name: { type: String, required: true },
	size: { type: String, required: true },
	sku: { type: Number, required: false },
	price: { type: Number, required: false }
});

const Pricings = mongoose.model("Pricings", pricingSchema);

export default Pricings;
