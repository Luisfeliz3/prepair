const router = require("express").Router();
const dimsController = require("../../controllers/dimsController");

// Matches with "/api/getdims" from API.js
router.route("/")
    .get(dimsController.getDims);

module.exports = router;
