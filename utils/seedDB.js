const mongoose = require("mongoose");
const db = require("../models");
const { mongoOptions } = require("./config");

mongoose.connect(
	// Name below is name of local (Robo3T)
	process.env.MONGODB_URI || "mongodb://localhost/prepair",
	mongoOptions
);

// User Projects - with matching project Ids - this is where new users would be stored
let userSeed = [
	{
		username: "testUser",
		email: "email@email.com",
		password: "testPassword",
		currentProjects: [
			{
				projectId: 1,
				userParams: [
					{
						dimensionWidth: "inputWidth",
						quantity: "18",
					},
					{
						dimensionDepth: "inputDepth",
						quantity: "24",
					},
					{
						dimensionHeight: "inputHeight",
						quantity: "30",
					},
					// check below
					{
						completionStatus: 1,
					},
				],
				resultCalcs: [
					{
						name: "2x4 nominal stud(s)",
						twoByFourLengthCount: "",
						twoByFourLengthInFeet: "",
						twoByFourWasteFactorPercentage: "",
						price: "",
						totalCost: "",
					},
					{
						name: "1-inch rod(s)",
						rodCount: "",
						rodLengthInFeet: "",
						rodWasteFactorPercentage: "",
						price: "",
						totalCost: "",
					},
					{
						name: "3/4 inch plywood",
						threeFourPlywoodCount: "",
						threeFourPlywoodAreaInFeet: "",
						threeFourPlywoodWasteFactorPercentage: "",
						price: "",
						totalCost: "",
					},
					{
						name: "1x3 nominal stud(s)",
						oneByThreeLengthCount: "",
						oneByThreeLengthInFeet: "",
						oneByThreeWasteFactorPercentage: "",
						price: "",
						totalCost: "",
					},
					{
						name: "1 inch plywood",
						onePlywoodCount: "",
						onePlywoodAreaInFeet: "",
						onePlywoodWasteFactorPercentage: "",
						price: "",
						totalCost: "",
					},
					{
						name: "heavy-duty side-mounted drawer slide(s)",
						slidesCount: "22in deep pairs",
						price: "",
						totalCost: "",
					},
					{
						name: "closet rod with sleeves",
						closetRodLengthCount: "",
						closetRodLengthInFeet: "",
						closetRodWasteFactorPercentage: "",
						price: "",
						totalCost: "",
					},
					{
						name: "subway tile",
						tileInSquareFeet: "",
						tileWasteFactorPercentage: "",
						price: "",
						totalCost: "",
					},
					{
						name: "cement board backer",
						cementBoardCount: "",
						cementBoardAreaInFeet: "",
						cementBoardWasteFactorPercentage: "",
						price: "",
						totalCost: "",
					},
					{
						name: "cementitious grout",
						size: "1/8 inch joint thickness",
						tileInSquareFeet: "",
						price: "",
						totalCost: "",
					},
					{
						name: "thin-set mortar adhesive",
						size: "1/8 inch thick layer",
						cementBoardAreaInFeet: "",
						price: "",
						totalCost: "",
					},
					{
						name: "gypsum board",
						gypBoardCount: "",
						gypBoardAreaInFeet: "",
						gypBoardWasteFactorPercentage: "",
						price: "",
						totalCost: "",
					},
				],
			},
		],
	},
	{
		username: "Admin",
		email: "admin@contact.us",
		password: "1",
		currentProjects: [
			{
				projectId: 2,
				userParams: [
					{
						dimensionWidth: "inputWidth",
						quantity: "18",
					},
					{
						dimensionDepth: "inputDepth",
						quantity: "24",
					},
					{
						dimensionHeight: "inputHeight",
						quantity: "30",
					},
					{
						completionStatus: 3,
					},
				],
				resultCalcs: [
					{
						name: "2x4 nominal stud(s)",
						twoByFourLengthCount: "",
						twoByFourLengthInFeet: "",
						twoByFourWasteFactorPercentage: "",
						price: "",
						totalCost: "",
					},
					{
						name: "1-inch rod(s)",
						rodCount: "",
						rodLengthInFeet: "",
						rodWasteFactorPercentage: "",
						price: "",
						totalCost: "",
					},
					{
						name: "3/4 inch plywood",
						threeFourPlywoodCount: "",
						threeFourPlywoodAreaInFeet: "",
						threeFourPlywoodWasteFactorPercentage: "",
						price: "",
						totalCost: "",
					},
					{
						name: "1x3 nominal stud(s)",
						oneByThreeLengthCount: "",
						oneByThreeLengthInFeet: "",
						oneByThreeWasteFactorPercentage: "",
						price: "",
						totalCost: "",
					},
					{
						name: "1 inch plywood",
						onePlywoodCount: "",
						onePlywoodAreaInFeet: "",
						onePlywoodWasteFactorPercentage: "",
						price: "",
						totalCost: "",
					},
					{
						name: "heavy-duty side-mounted drawer slide(s)",
						slidesCount: "22in deep pairs",
						price: "",
						totalCost: "",
					},
					{
						name: "closet rod with sleeves",
						closetRodLengthCount: "",
						closetRodLengthInFeet: "",
						closetRodWasteFactorPercentage: "",
						price: "",
						totalCost: "",
					},
					{
						name: "subway tile",
						tileInSquareFeet: "",
						tileWasteFactorPercentage: "",
						price: "",
						totalCost: "",
					},
					{
						name: "cement board backer",
						cementBoardCount: "",
						cementBoardAreaInFeet: "",
						cementBoardWasteFactorPercentage: "",
						price: "",
						totalCost: "",
					},
					{
						name: "cementitious grout",
						size: "1/8 inch joint thickness",
						tileInSquareFeet: "",
						price: "",
						totalCost: "",
					},
					{
						name: "thin-set mortar adhesive",
						size: "1/8 inch thick layer",
						cementBoardAreaInFeet: "",
						price: "",
						totalCost: "",
					},
					{
						name: "gypsum board",
						gypBoardCount: "",
						gypBoardAreaInFeet: "",
						gypBoardWasteFactorPercentage: "",
						price: "",
						totalCost: "",
					},
				],
			},
		],
	},
];

// All base projects - with matching project Ids to userSeed
let baseProjectsSeed = [
	{
		projectName: "chair",
		projectId: 1, //used as id
		description: "A simple chair with an open back and a footrail.",
		materials: [
			{
				matType: "wood",
				name: "2x4 nominal studs",
				size: "8ft lengths of 2x4 (1.5in x 3.5in)",
			},
			{
				matType: "wood",
				name: "1-inch rod",
				size: "4ft length",
			},
			{
				matType: "wood",
				name: "plywood sheets",
				size: "4ft x 8ft x 11/16in",
			},
		],
		tools: [
			"saw",
			"level",
			"hammer",
			"sandpaper",
			"drill",
			"2in wood screws",
			"1-inch diameter drill bit",
		],
		optional: ["paint or wood stain"],
		userParams: [
			{
				dimensionWidth: "inputWidth",
				unit: "inches",
				defaultQuantity: "18",
				options: [18, 24, 30], //populates drop downs
			},
			{
				dimensionDepth: "inputDepth",
				unit: "inches",
				defaultQuantity: "18",
				options: [18, 24, 30],
			},
			{
				dimensionHeight: "inputHeight",
				unit: "inches",
				defaultQuantity: "30",
				options: [24, 30, 36],
			},
			{
				optionalArea: "calculatedArea",
			},
			{
				calculatedWasteFactor: "calculatedWastePercentage",
			},
		],
		imgMain: "/public/construction-icons/chair-main.png",
		imgEx: "/public/construction-icons/chair-ex.png",
	},
	{
		projectName: "bookcase",
		projectId: 2,
		description: "A simple bookcase with four fixed shelves.",
		materials: [
			{
				matType: "wood",
				name: "plywood sheets",
				size: "4ft x 8ft x 11/16in",
			},
			{
				matType: "wood",
				name: "1x3 nominal studs",
				size: "8ft lengths of 1x3 (0.5 in x 2.5in)",
			},
		],
		tools: ["saw", "level", "hammer", "sandpaper", "drill", "1in wood screws"],
		optional: [
			"paint or wood stain",
			"shelf pins (removeable shelves)",
			"5mm shelf pin drill bit",
			"anti-tip hardware",
		],
		userParams: [
			{
				dimensionWidth: "inputWidth",
				unit: "inches",
				defaultQuantity: "30",
				options: [24, 30, 36, 42, 48],
			},
			{
				dimensionDepth: "inputDepth",
				unit: "inches",
				defaultQuantity: "18",
				options: [12, 18, 24],
			},
			{
				dimensionHeight: "inputHeight",
				unit: "inches",
				defaultQuantity: "60",
				options: [30, 36, 42, 48, 54, 60, 66, 72],
			},
			{
				optionalArea: "calculatedArea",
			},
			{
				calculatedWasteFactor: "calculatedWastePercentage",
			},
		],
		imgMain: "/public/construction-icons/bookcase-main.png",
		imgEx: "/public/construction-icons/bookcase-ex.png",
	},
	{
		projectName: "table",
		projectId: 3,
		description: "A rectangular table with two pedestal legs.",
		materials: [
			{
				matType: "wood",
				name: "thick plywood sheets",
				size: "4ft x 8ft x 1in",
			},
		],
		tools: ["saw", "level", "hammer", "sandpaper", "drill", "1in wood screws"],
		optional: ["paint or wood stain", "self-leveling feet"],
		userParams: [
			{
				dimensionWidth: "inputWidth",
				unit: "inches",
				defaultQuantity: "60",
				options: [48, 60, 72, 84, 96],
			},
			{
				dimensionDepth: "inputDepth",
				unit: "inches",
				defaultQuantity: "36",
				options: [36, 42, 48],
			},
			{
				dimensionHeight: "inputHeight",
				unit: "inches",
				defaultQuantity: "30",
				options: [26, 28, 30],
			},
			{
				optionalArea: "calculatedArea",
			},
			{
				calculatedWasteFactor: "calculatedWastePercentage",
			},
		],
		imgMain: "/public/construction-icons/table-main.png",
		imgEx: "/public/construction-icons/table-ex.png",
	},
	{
		projectName: "desk",
		projectId: 4,
		description: "A simple desk with above-surface hutch for storage.",
		materials: [
			{
				matType: "wood",
				name: "plywood sheets",
				size: "4ft x 8ft x 11/16in",
			},
			{
				matType: "wood",
				name: "2x4 nominal studs",
				size: "8ft lengths of 2x4 (1.5 in x 3.5in)",
			},
		],
		tools: [
			"saw",
			"level",
			"sandpaper",
			"drill",
			"1in wood screws",
			"biscuit joiner",
		],
		optional: ["paint or wood stain", "self-leveling feet"],
		userParams: [
			{
				dimensionWidth: "inputWidth",
				unit: "inches",
				defaultQuantity: "54",
				options: [48, 54, 60, 66, 72],
			},
			{
				dimensionDepth: "inputDepth",
				unit: "inches",
				defaultQuantity: "30",
				options: [24, 30, 36],
			},
			{
				dimensionHeight: "inputHeight",
				unit: "inches",
				defaultQuantity: "30",
				options: [26, 28, 30],
			},
			{
				optionalArea: "calculatedArea",
			},
			{
				calculatedWasteFactor: "calculatedWastePercentage",
			},
		],
		imgMain: "/public/construction-icons/desk-main.png",
		imgEx: "/public/construction-icons/desk-ex.png",
	},
	{
		projectName: "dresser",
		projectId: 5,
		description: "A dresser with four drawers.",
		materials: [
			{
				matType: "wood",
				name: "plywood sheets",
				size: "4ft x 8ft x 11/16in",
			},
			{
				matType: "wood",
				name: "2x4 nominal studs",
				size: "8ft lengths of 2x4 (1.5 in x 3.5in)",
			},
			{
				matType: "hardware",
				name: "heavy-duty side-mounted drawer slides",
				size: "22in depth",
			},
			{
				matType: "hardware",
				name: "closet rod with sleeves",
				size: "1-1/4 in diameter",
			},
		],
		tools: [
			"saw",
			"level",
			"sandpaper",
			"drill",
			"1in wood screws",
			"biscuit joiner",
		],
		optional: [
			"paint or wood stain",
			"self-leveling feet",
			"anti-tip hardware",
		],
		userParams: [
			{
				dimensionWidth: "inputWidth",
				unit: "inches",
				defaultQuantity: "36",
				options: [24, 30, 36, 42, 48],
			},
			{
				dimensionDepth: "inputDepth",
				unit: "inches",
				defaultQuantity: "24",
				options: [24, 30],
			},
			{
				dimensionHeight: "inputHeight",
				unit: "inches",
				defaultQuantity: "30",
				options: [30, 36, 42, 48],
			},
			{
				optionalArea: "calculatedArea",
			},
			{
				calculatedWasteFactor: "calculatedWastePercentage",
			},
		],
		imgMain: "/public/construction-icons/dresser-main.png",
		imgEx: "/public/construction-icons/dresser-ex.png",
	},
	{
		projectName: "tile",
		projectId: 6,
		description:
			"A tiled backsplash on cement board for bathroom or kitchen areas.",
		materials: [
			{
				matType: "tile",
				name: "subway tile",
				size: "3x6",
			},
			{
				matType: "substrate",
				name: "cement board backer",
				size: "3/4 in thick",
			},
			{
				matType: "grout",
				name: "cementitious grout",
				size: "1/8 in joint thickness",
			},
			{
				matType: "adhesive",
				name: "thin-set mortar adhesive",
				size: "1/8 in thick layer",
			},
		],
		tools: ["tile saw", "level", "tile spacers", "trowel", "mixer", "laser"],
		optional: [
			"diamond blades",
			"diamond drill bits for hardware installation",
		],
		userParams: [
			{
				dimensionWidth: "inputWidth",
				unit: "inches",
				defaultQuantity: "96",
				options: [48, 54, 60, 66, 72, 78, 84, 90, 96],
			},
			{
				dimensionDepth: "inputDepth",
				unit: "inches",
				defaultQuantity: "0.5",
				options: [0.5, 0.75, 1],
			},
			{
				dimensionHeight: "inputHeight",
				unit: "inches",
				defaultQuantity: "30",
				options: [18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96],
			},
			{
				optionalArea: "calculatedArea",
			},
			{
				calculatedWasteFactor: "calculatedWastePercentage",
			},
		],
		imgMain: "/public/construction-icons/tile-main.png",
		imgEx: "/public/construction-icons/tile-ex.png",
	},
	{
		projectName: "wall",
		projectId: 7,
		description: "A standard wood-framed wall with drywall on both sides.",
		materials: [
			{
				matType: "gypsum",
				name: "gypsum board",
				size: "4ft x 8ft x 5/8in",
			},
			{
				matType: "wood",
				name: "2x4 nominal studs",
				size: "8ft lengths of 2x4 (1.5in x 3.5in)",
			},
		],
		tools: ["drywall screws", "level", "tape", "spackle", "laser"],
		optional: ["insulation", "outlet box", "blocking", "wall paint"],
		userParams: [
			{
				dimensionWidth: "inputWidth",
				unit: "inches",
				defaultQuantity: "96",
				options: [24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96],
			},
			{
				dimensionDepth: "inputDepth",
				unit: "inches",
				defaultQuantity: "5",
				options: [5],
			},
			{
				dimensionHeight: "inputHeight",
				unit: "inches",
				defaultQuantity: "96",
				options: [24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96],
			},
			{
				optionalArea: "calculatedArea",
			},
			{
				calculatedWasteFactor: "calculatedWastePercentage",
			},
		],
		imgMain: "/public/construction-icons/wall-main.png",
		imgEx: "/public/construction-icons/wall-ex.png",
	},
	{
		projectName: "ladder",
		projectId: 8,
		description: "A simple wood ladder with rungs spaced 12 inches apart.",
		materials: [
			{
				matType: "wood",
				name: "1-inch rod",
				size: "4ft length",
			},
			{
				matType: "wood",
				name: "2x4 nominal studs",
				size: "8ft lengths of 2x4 (1.5in x 3.5in)",
			},
		],
		tools: ["2-in wood screws", "drill", "1-in drill bit", "sandpaper", "saw"],
		optional: ["wood stain or paint"],
		userParams: [
			{
				dimensionWidth: "inputWidth",
				unit: "inches",
				defaultQuantity: "24",
				options: [18, 24, 30, 36],
			},
			{
				dimensionDepth: "inputDepth",
				unit: "inches",
				defaultQuantity: "3.5",
				options: [3.5],
			},
			{
				dimensionHeight: "inputHeight",
				unit: "inches",
				defaultQuantity: "96",
				options: [60, 66, 72, 78, 84, 90, 96],
			},
			{
				optionalArea: "calculatedArea",
			},
			{
				calculatedWasteFactor: "calculatedWastePercentage",
			},
		],
		imgMain: "/public/construction-icons/ladder-main.png",
		imgEx: "/public/construction-icons/ladder-ex.png",
	},
];

// Protips seed for home page
let proTips = [
	{
		proTipId: 1,
		proTipText:
			"You can fix a cracked foundation with a small amount of epoxy and plastic tubing.",
	},
	{
		proTipId: 2,
		proTipText:
			"A self-centering drill bit costs less than $25 and can save hours of frustration.",
	},
	{
		proTipId: 3,
		proTipText:
			"A snap toggle anchor can hold up to 265 pounds in 1/2 inch drywall.",
	},
	{
		proTipId: 4,
		proTipText:
			"Sand with the grain of the wood, especially for the final grits. To remove deep scratches and stains, angle across the grain up to about 45º for the first sanding. Before moving to the next finer grit, sand with the grain to remove all cross-grain scratches.",
	},
	{
		proTipId: 5,
		proTipText:
			"When building with wood, know the correct moisture content of each piece. Too dry, and the finished product may swell or crack. Too moist, and the end product may shrink or warp. Incorrect moisture causes 80% of all woodworking problems.",
	},
	{
		proTipId: 6,
		proTipText:
			"Make accurate measuring and marking layouts on boards faster and easier with a drafting square.",
	},
	{
		proTipId: 7,
		proTipText:
			"Always try to use cut tiles that are between half- and full-size. Anything less than half-size will look like an out-of-place sliver compared to larger tiles.",
	},
	{
		proTipId: 8,
		proTipText: "Remember that preparation is 75% of the job.",
	}
];

// Completion status of project, matched to userParams in userSeed
//used for progress ring
let completion = [
	{
		completionStatus: 1,
		description: "Calculated materials.",
		completionPercentage: 25,
	},
	{
		completionStatus: 2,
		description: "Purchased materials and prepared tools.",
		completionPercentage: 50,
	},
	{
		completionStatus: 3,
		description: "Watched instructional video.",
		completionPercentage: 75,
	},
	{
		completionStatus: 4,
		description: "Completed build.",
		completionPercentage: 100,
	},
];

// Pricing SKU to materials
let pricing = [
	{
		name: "2x4 nominal stud(s)",
		size: "8ft lengths",
		sku: "",
		price: "",
	},
	{
		name: "1-inch rod(s)",
		size: "4ft lengths",
		sku: "",
		price: "",
	},
	{
		name: "3/4 inch plywood",
		size: "4ft x 8ft x 11/16in sheets",
		sku: "",
		price: "",
	},
	{
		name: "1x3 nominal stud(s)",
		size: "8ft lengths",
		sku: "",
		price: "",
	},
	{
		name: "1 inch plywood",
		size: "4ft x 8ft x 1in sheets",
		sku: "",
		price: "",
	},
	{
		name: "heavy-duty side-mounted drawer slide(s)",
		size: "22in deep pairs",
		sku: "",
		price: "",
	},
	{
		name: "closet rod with sleeves",
		size: "1-1/4 inch diam. 6ft lengths",
		sku: "",
		price: "",
	},
	{
		name: "subway tile",
		size: "square feet",
		sku: "",
		price: "",
	},
	{
		name: "cement board backer",
		size: "3/4 inch thick sheets",
		sku: "",
		price: "",
	},
	{
		name: "cementitious grout",
		size: "1/8 inch joint thickness",
		sku: "",
		price: "",
	},
	{
		name: "thin-set mortar adhesive",
		size: "1/8 inch thick layer",
		sku: "",
		price: "",
	},
	{
		name: "gypsum board",
		size: "4ft x 8ft x 5/8in sheets",
		sku: "",
		price: "",
	},
];

// Should be five collections based on seeds - users with currentProjects, base projects, proTips, completion phases, and pricing.
// Database name "Prepair" - please change if different


// more logging - userrecords inserted - pricing records inserted.

// Removing all users with their currentProjects
const seed = function () {
	db.Users.deleteMany({})
		.then(() => db.Users.create(userSeed))
		.then((data) => {
			console.log(data.length + " records inserted!");
			process.exit(0);
		})
		.catch((err) => {
			console.error(err);
			process.exit(1);
		});

	db.Pricings.deleteMany({})
		.then(() => db.Pricings.create(pricing))
		.then((data) => {
			console.log(data.length + " records inserted!");
			process.exit(0);
		})
		.catch((err) => {
			console.error(err);
			process.exit(1);
		});

	db.Completions.deleteMany({})
		.then(() => db.Completions.create(completion))
		.then((data) => {
			console.log(data.length + " records inserted!");
			process.exit(0);
		})
		.catch((err) => {
			console.error(err);
			process.exit(1);
		});

	db.Protips.deleteMany({})
		.then(() => db.Protips.create(proTips))
		.then((data) => {
			console.log(data.length + " records inserted!");
			process.exit(0);
		})
		.catch((err) => {
			console.error(err);
			process.exit(1);
		});

	db.BaseProjects.deleteMany({})
		.then(() => db.BaseProjects.create(baseProjectsSeed))
		.then((data) => {
			console.log(data.length + " records inserted!");
			process.exit(0);
		})
		.catch((err) => {
			console.error(err);
			process.exit(1);
		});
};

module.exports = { seed };
