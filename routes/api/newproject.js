import {Router} from "express";
import projectController from "../../controllers/projectController.js";


const router = Router();
// Matches with "/api/newproject" from API.js
router.route("/")
    .get(projectController.findAll);

export default router;
