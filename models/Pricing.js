const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pricingSchema = new Schema({
	name: { type: String, required: true },
	size: { type: String, required: true },
	sku: { type: Number, required: true },
	price: { type: Number}
});

const Pricing = mongoose.model("Pricing", pricingSchema);

module.exports = Pricing;
