const router = require("express").Router();
const pricingController = require("../../controllers/pricingController");

// Matches with "/api/pricing" from API.js
router.route("/")
    .get(pricingController.getPricing);

module.exports = router;
