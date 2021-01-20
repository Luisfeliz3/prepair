const router = require("express").Router();
// const commentRoutes = require("./comments");
const userRoutes = require("./user");
const newProjectRoutes = require("./newproject");
const pricingRoutes = require("./pricing");

// comments routes
// router.use("/comments", commentRoutes);

// projects routes
router.use("/newproject", newProjectRoutes);
// user routes
router.use("/user", userRoutes);
// pricing routes
router.use("/pricing", pricingRoutes)

module.exports = router;
