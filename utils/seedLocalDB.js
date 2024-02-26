import mongoose from "mongoose";
import db from "../models/index.js";
import { mongoOptions } from "./config.js";
import seed from "./seedBaseDB.js";

mongoose.connect(
	// Name below is name of local (Robo3T)
	process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/prepair",
	// mongoOptions  
	{
		useUnifiedTopology: true ,
		useNewUrlParser: true,
	}
);
seed.seed();

setTimeout(function () {
	process.exit(0);
}, 5000);
