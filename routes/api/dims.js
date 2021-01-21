const router = require("express").Router();
const dimsController = require("../../controllers/dimsController");

// Matches with "/api/dims" from API.js
router.route("/")
    .get(dimsController.setDims);

module.exports = router;
