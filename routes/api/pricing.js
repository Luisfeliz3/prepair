import {Router} from "express";

import pricingController from "../../controllers/pricingController.js";


const router = Router();

// Matches with "/api/pricing" from API.js
router.route("/")
    .get(pricingController.getPricing);

export default router;
