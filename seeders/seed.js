let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/projects", {
	useNewUrlParser: true,
	useFindAndModify: false,
});

let projectSeed = [
	{
		project: "bookcase",
		description: "A simple bookcase with four fixed shelves.",
		materials: [
            {
                type: "wood",
                name: "plywood sheets",
                size: "4ft x 8ft x 3/4in"
            }
        ],
        tools: ["level", "hammer", "sandpaper", "drill", "1in screws"],
        optional: ["paint", "shelf pins (removeable shelves)", "5mm shelf pin drill bit"]
        inputWidth: "",
        inputDepth: "",
        inputHeight: "",
		imgMain: "/public/construction-icons/bookcase-main.png",
		imgEx: "/public/construction-icons/bookcase-ex.png",
	},
];

db.Project.deleteMany({})
	.then(() => db.Project.collection.insertMany(projectSeed))
	.then((data) => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
