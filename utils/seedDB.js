const mongoose = require("mongoose");
const db = require("../models");
const { mongoOptions } = require("./config");
const seed = require("./seedServerDB");

mongoose.connect(
	// Name below is name of local (Robo3T)
	process.env.MONGODB_URI || "mongodb://localhost/prepair",
	mongoOptions
);

seed.seed();

setTimeout(function () {
	process.exit(0);
}, 5000);
