const router = require("express").Router();
const dimsController = require("../../controllers/dimsController");

// Matches with "/api/saveInput" from API.js
router.route("/")
    .get(dimsController.saveDims);

module.exports = router;
