import {Router} from "express";
import dimsController from "../../controllers/dimsController.js";


const router = Router();
// Matches with "/api/getdims" from API.js
router.route("/")
    .get(dimsController.getDims);

export default router;
