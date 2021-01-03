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
                size: "4ft x 8ft x 11/16in"
            }
        ],
        tools: ["level", "hammer", "sandpaper", "drill", "1in screws"],
        optional: ["paint or wood stain", "shelf pins (removeable shelves)", "5mm shelf pin drill bit"],
        inputWidth: "",
        inputDepth: "",
        inputHeight: "",
		imgMain: "/public/construction-icons/bookcase-main.png",
		imgEx: "/public/construction-icons/bookcase-ex.png"
    },
    {
        project: "chair",
        description: "A simple chair with an open back and a footrail.",
        materials: [
            {
                type: "wood",
                name: "2x4 nominal studs",
                size: "8ft lengths of 2x4 (1.5in x 3.5in)"
            },
            {
                type: "wood",
                name: "1-inch rod",
                size: "4ft length"
            },
            {
                type: "wood",
                name: "plywood sheets",
                size: "4ft x 8ft x 11/16in"
            }
        ],
        tools: ["level", "hammer", "sandpaper", "drill", "2in screws", "1-inch diameter drill bit"],
        optional: ["paint or wood stain"],
        inputWidth: "",
        inputDepth: "",
        inputHeight: "",
		imgMain: "/public/construction-icons/chair-main.png",
		imgEx: "/public/construction-icons/chair-ex.png"
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
