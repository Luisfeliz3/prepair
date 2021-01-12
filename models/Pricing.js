const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pricingSchema = new Schema({
	name: { type: String, required: true },
	size: { type: String, required: true },
	sku: { type: Number, required: false },
	price: { type: Number, required: false }
});

const Pricing = mongoose.model("Pricing", pricingSchema);

module.exports = Pricing;
