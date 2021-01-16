const router = require("express").Router();
const projectController = require("../../controllers/projectController");


router.route("/newproject")
.get( projectController.getProjectOptions )


module.exports = router;
