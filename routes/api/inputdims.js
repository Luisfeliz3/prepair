import {Router} from "express";


import dimsController from "../../controllers/dimsController.js";


const router = Router();
// Matches with "/api/saveInput" from API.js
router.route("/")
    .get(dimsController.saveDims);

export default router;
