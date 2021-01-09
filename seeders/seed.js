let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/projects", {
	useNewUrlParser: true,
	useFindAndModify: false,
});

// Protips seed for home page
let proTips = [
    {
        proTipId: 1,
        proTipText: "You can fix a cracked foundation with a small amount of epoxy and plastic tubing."
    },
    {
        proTipId: 2,
        proTipText: "A self-centering drill bit costs less than $25 and can save hours of frustration."
    },
    {
        proTipId: 3,
        proTipText: "A snap toggle anchor can hold up to 265 pounds in 1/2 inch drywall."
    },
    {
        proTipId: 4,
        proTipText: "Sand with the grain of the wood, especially for the final grits. To remove deep scratches and stains, angle across the grain up to about 45º for the first sanding. Before moving to the next finer grit, sand with the grain to remove all cross-grain scratches.."
    },
    {
        proTipId: 5,
        proTipText: "When building with wood, know the correct moisture content of each piece. Too dry, and the finished product may swell or crack. Too moist, and the end product may shrink or warp. Incorrect moisture causes 80% of all woodworking problems."
    },
    {
        proTipId: 6,
        proTipText: "Make accurate measuring and marking layouts on boards faster and easier with a drafting square."
    },
    {
        proTipId: 7,
        proTipText: "Always try to use cut tiles that are between half- and full-size. Anything less than half-size will look like an out-of-place sliver compared to larger tiles."
    },
    {
        proTipId: 8,
        proTipText: "Remember that preparation is 75% of the job."
    }
]

// All base projects
let baseProjectsSeed = [
    {
        projectName: "chair",
        projectId: 001, 
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
        tools: ["level", "hammer", "sandpaper", "drill", "2in wood screws", "1-inch diameter drill bit"],
        optional: ["paint or wood stain"],
        // inputWidth: "",
        // inputDepth: "",
        // inputHeight: "",
        userParams: [
            {
                "dimensionWidth": "inputWidth",
                "unit": "inches",
                "defaultQuantity": "18",
                "options": [18, 24, 30]
            },
            {
                "dimensionDepth": "inputDepth",
                "unit": "inches",
                "defaultQuantity": "18",
                "options": [18, 24, 30]
            },
            {
                "dimensionHeight": "inputHeight",
                "unit": "inches",
                "defaultQuantity": "30",
                "options": [24, 30, 36]
            },
            {
                "optionalArea": "calculatedArea"
            }
        ],
		imgMain: "/public/construction-icons/chair-main.png",
		imgEx: "/public/construction-icons/chair-ex.png"
    },
    {
        projectName: "bookcase",
        projectId: 002, 
		description: "A simple bookcase with four fixed shelves.",
		materials: [
            {
                type: "wood",
                name: "plywood sheets",
                size: "4ft x 8ft x 11/16in"
            },
            {
                type: "wood",
                name: "1x3 nominal studs",
                size: "8ft lengths of 1x3 (0.5 in x 2.5in)"
            }
        ],
        tools: ["level", "hammer", "sandpaper", "drill", "1in wood screws"],
        optional: ["paint or wood stain", "shelf pins (removeable shelves)", "5mm shelf pin drill bit"],
        // inputWidth: "",
        // inputDepth: "",
        // inputHeight: "",
        userParams: [
            {
                "dimensionWidth": "inputWidth",
                "unit": "inches",
                "defaultQuantity": "18",
                "options": [18, 24, 30]
            },
            {
                "dimensionDepth": "inputDepth",
                "unit": "inches",
                "defaultQuantity": "18",
                "options": [18, 24, 30]
            },
            {
                "dimensionHeight": "inputHeight",
                "unit": "inches",
                "defaultQuantity": "30",
                "options": [24, 30, 36]
            },
            {
                "optionalArea": "calculatedArea"
            }
        ],
		imgMain: "/public/construction-icons/bookcase-main.png",
		imgEx: "/public/construction-icons/bookcase-ex.png"
    }
]

// User Projects - with matching project Ids
let userProjects = [
    {
        user: "testUser",
        password: "testPassword",
        currentProjects = [
            {
                projectId: 001,
                userParams: [
                    {
                        "dimensionWidth": "inputWidth",
                        "quantity" : "18",
                    },
                    {
                        "dimensionDepth": "inputDepth",
                        "quantity" : "24",
                    },
                    {
                        "dimensionHeight": "inputHeight",
                        "quantity" : "30",
                    },
                    {
                        "completionStatus": 1
                    }
                ]
            }
        ]
    }
]

// Completion status of project, matched to userParams in userProjects
let completion = [
    {
        "completionStatus": 1,
        "completionPercentage": 25
    },
    {
        "completionStatus": 2,
        "completionPercentage": 50
    },
    {
        "completionStatus": 3,
        "completionPercentage": 75
    },
    {
        "completionStatus": 4,
        "completionPercentage": 100
    }
]

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
