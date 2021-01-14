const router = require("express").Router();
const projectController = require("../../controllers/projectController");


router.route("/newproject")
.get( projectController.getAllProjects )


module.exports = router;
