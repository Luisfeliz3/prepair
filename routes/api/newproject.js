const router = require("express").Router();
const projectController = require("../../controllers/projectController");

// Matches with "/api/getallprojects" from API.js
router.route("/")
    .get(projectController.findAll);

module.exports = router;
