import mongoose from "mongoose";
import db from "../models/index.js";
import { mongoOptions } from "./config.js";
import seed from "./seedBaseDB.js";

mongoose.connect(
	// Name below is name of local (Robo3T)
	process.env.MONGODB_URI || "mongodb://localhost/prepair",
	mongoOptions
);

seed.seed();

setTimeout(function () {
	process.exit(0);
}, 5000);
