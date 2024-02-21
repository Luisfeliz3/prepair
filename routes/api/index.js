import {Router} from "express";
// import commentRoutes from "./comments";
import userRoutes from "./user.js";
import newProjectRoutes from "./newproject.js";
import pricingRoutes from "./pricing.js";
import dimInputRoutes from "./inputdims.js";
import getDimRoutes from "./getdims.js";
const router = Router();

// comments routes
// Router.use("/comments", commentRoutes);

// projects routes
router.use("/newproject", newProjectRoutes);
// user routes
router.use("/user", userRoutes);
// pricing routes
router.use("/pricing", pricingRoutes);
// dim routes (save)
router.use("/saveInput", dimInputRoutes);
// dim routes (get)
router.use("/getdims", getDimRoutes)

export default router;
