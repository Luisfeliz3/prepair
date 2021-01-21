const router = require("express").Router();
// const commentRoutes = require("./comments");
const userRoutes = require("./user");
const newProjectRoutes = require("./newproject");
const pricingRoutes = require("./pricing");
const dimRoutes = require("./dims");
const getDimRoutes = require("./getdims");

// comments routes
// router.use("/comments", commentRoutes);

// projects routes
router.use("/newproject", newProjectRoutes);
// user routes
router.use("/user", userRoutes);
// pricing routes
router.use("/pricing", pricingRoutes);
// dim routes (save)
router.use("/dims", dimRoutes);
// dim routes (get)
router.use("/getdims", getDimRoutes)

module.exports = router;
