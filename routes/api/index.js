const router = require("express").Router();
// const commentRoutes = require("./comments");
const userRoutes = require("./user");
const newProjectRoutes = require("./newproject");

// comments routes
// router.use("/comments", commentRoutes);

// projects routes
router.use("/newproject", newProjectRoutes);
// user routes
router.use("/user", userRoutes);

module.exports = router;
