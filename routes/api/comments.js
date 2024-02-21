import {Router} from "express";
import commentsController from "../../controllers/commentsController.js";

const router = Router();

// Matches with "/api/comments"
router.route("/")
  .get(commentsController.findAll)
  .post(commentsController.create);

// Matches with "/api/comments/:id"
router
  .route("/:id")
  .get(commentsController.findById)
  .put(commentsController.update)
  .delete(commentsController.remove);

export default router;
