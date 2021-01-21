export default {
	// Function to CALCULATE CHAIR
	calculateChair: function (w, d, h) {
		// Get values from userState inputs
		// let averageWF = (twoByFourWasteFactorPercentage+plywoodWasteFactorPercentage+rodWasteFactorPercentage)/3;
		//Calculating 2x4 wood material below
		let twoByFourLengthInFeet = (h * 2 + (w - 1.5) + 34.5) / 12;
		// below will give actual count of 2x4 material at 8 foot lengths
		let twoByFourLengthCount = roundUpEight(twoByFourLengthInFeet);
		let twoByFourWasteFactorPercentage =
			((twoByFourLengthCount * 8 - twoByFourLengthInFeet) /
				(twoByFourLengthCount * 8)) *
			100;
		console.log(
			"You are using" +
				twoByFourLengthCount +
				" lengths of 2x4 at a waste factor of " +
				twoByFourWasteFactorPercentage +
				"%"
		);

		//Calculating plywood material below
		let plywoodAreaInFeet = (w * d) / 144;
		let plywoodCount = plywoodRound(plywoodAreaInFeet);
		let plywoodWasteFactorPercentage =
			((plywoodCount * 32 - plywoodAreaInFeet) / (plywoodCount * 32)) * 100;
		console.log(
			"You are using" +
				plywoodCount +
				" pieces of plywood at a waste factor of " +
				plywoodWasteFactorPercentage +
				"%"
		);

		//Calculating rod material below
		let rodLengthInFeet = (w - 1.5) / 12;
		let rodCount = roundUpFour(rodLengthInFeet);
		let rodWasteFactorPercentage =
			((rodCount * 12 - rodLengthInFeet) / (rodCount * 12)) * 100;
		console.log(
			"You are using" +
				rodCount +
				" lengths of rod at a waste factor of " +
				rodWasteFactorPercentage +
				"%"
		);
		console.log("Your overall average waste factor is " + averageWF + " %");
		return {
			twoByFourLength: twoByFourLengthInFeet,
			twoByFourQty: twoByFourLengthCount,
			twoByFourWF: twoByFourWasteFactorPercentage,
			plywoodArea: plywoodAreaInFeet,
			plywoodQty: plywoodCount,
			plywoodWF: plywoodWasteFactorPercentage,
			rodLength: rodLengthInFeet,
			rodQty: rodCount,
			rodWF: rodWasteFactorPercentage,
		};
	},

	// Function to CALCULATE BOOKCASE
	calculateBookcase: function (w, d, h) {
		let plywoodAreaInFeet = (6 * (w * d) + 2 * (d * h) + d * h) / 144;
		let plywoodCount = plywoodRound(plywoodAreaInFeet);
		let plywoodWasteFactorPercentage =
			((plywoodCount * 32 - plywoodAreaInFeet) / (plywoodCount * 32)) * 100;
		console.log(
			"You are using" +
				plywoodCount +
				" pieces of plywood at a waste factor of " +
				plywoodWasteFactorPercentage +
				"%"
		);

		let oneByThreeLengthInFeet = (2 * d - 5 + 2 * w) / 12;
		// below will give actual count of 2x4 material at 8 foot lengths
		let oneByThreeLengthCount = roundUpEight(twoByFourLengthInFeet);
		let oneByThreeWasteFactorPercentage =
			((oneByThreeLengthCount * 8 - twoByFourLengthInFeet) /
				(oneByThreeLengthCount * 8)) *
			100;
		console.log(
			"You are using" +
				oneByThreeLengthCount +
				" lengths of 2x4 at a waste factor of " +
				oneByThreeWasteFactorPercentage +
				"%"
		);

		return {
			oneByThreeLength: oneByThreeLengthInFeet,
			oneByThreeQty: oneByThreeLengthCount,
			oneByThreeWF: oneByThreeWasteFactorPercentage,
			plywoodArea: plywoodAreaInFeet,
			plywoodQty: plywoodCount,
			plywoodWF: plywoodWasteFactorPercentage,
		};
	},

	calculateTable: function (w, d, h) {
		let plywoodAreaInFeet =
			(w * d) / 144 + ((4 * (d - 12) + 24) * (h - 1)) / 144;
		let plywoodCount = plywoodRound(plywoodAreaInFeet);
		let plywoodWasteFactorPercentage =
			((plywoodCount * 32 - plywoodAreaInFeet) / (plywoodCount * 32)) * 100;
		console.log(
			"You are using" +
				plywoodCount +
				" pieces of plywood at a waste factor of " +
				plywoodWasteFactorPercentage +
				"%"
		);
		return {
			plywoodThickArea: plywoodAreaInFeet,
			plywoodThickQty: plywoodCount,
			plywoodThickWF: plywoodWasteFactorPercentage,
		};
	},

	calculateDesk: function (w, d, h) {
		let twoByFourLengthInFeet = (h - 12) * 4 + 2 * (d - 9);
		// below will give actual count of 2x4 material at 8 foot lengths
		let twoByFourLengthCount = roundUpEight(twoByFourLengthInFeet);
		let twoByFourWasteFactorPercentage =
			((twoByFourLengthCount * 8 - twoByFourLengthInFeet) /
				(twoByFourLengthCount * 8)) *
			100;
		console.log(
			"You are using" +
				twoByFourLengthCount +
				" lengths of 2x4 at a waste factor of " +
				twoByFourWasteFactorPercentage +
				"%"
		);

		//Calculating plywood material below
		let plywoodAreaInFeet =
			(w * d + 2 * (12 * d) + 12 * w + 8 * (w - 3) + 117) / 144;
		let plywoodCount = plywoodRound(plywoodAreaInFeet);
		let plywoodWasteFactorPercentage =
			((plywoodCount * 32 - plywoodAreaInFeet) / (plywoodCount * 32)) * 100;
		console.log(
			"You are using" +
				plywoodCount +
				" pieces of plywood at a waste factor of " +
				plywoodWasteFactorPercentage +
				"%"
		);
		return {
			twoByFourLength: twoByFourLengthInFeet,
			twoByFourQty: twoByFourLengthCount,
			twoByFourWF: twoByFourWasteFactorPercentage,
			plywoodArea: plywoodAreaInFeet,
			plywoodQty: plywoodCount,
			plywoodWF: plywoodWasteFactorPercentage,
		};
	},

	calculateDresser: function (w, d, h) {
		let twoByFourLengthInFeet = 2 * w + 2 * (d - 2.5);
		let twoByFourLengthCount = roundUpEight(twoByFourLengthInFeet);
		let twoByFourWasteFactorPercentage =
			((twoByFourLengthCount * 8 - twoByFourLengthInFeet) /
				(twoByFourLengthCount * 8)) *
			100;
		console.log(
			"You are using" +
				twoByFourLengthCount +
				" lengths of 2x4 at a waste factor of " +
				twoByFourWasteFactorPercentage +
				"%"
		);

		//Calculating plywood material below
		let plywoodAreaInFeet =
			(2 * ((h - 3.5) * d) +
				(h - 3.5) * w +
				2 * (w * (d - 0.75)) +
				w * d +
				(h - 4.25) +
				4 * (2 * (d - 3) + (w - 4) * (d - 3) + (h - 4.75) / 4)) /
			144;
		let plywoodCount = plywoodRound(plywoodAreaInFeet);
		let plywoodWasteFactorPercentage =
			((plywoodCount * 32 - plywoodAreaInFeet) / (plywoodCount * 32)) * 100;
		console.log(
			"You are using" +
				plywoodCount +
				" pieces of plywood at a waste factor of " +
				plywoodWasteFactorPercentage +
				"%"
		);

		// Calculating slides
		let slideCount = 4;
		return {
			twoByFourLength: twoByFourLengthInFeet,
			twoByFourQty: twoByFourLengthCount,
			twoByFourWF: twoByFourWasteFactorPercentage,
			plywoodArea: plywoodAreaInFeet,
			plywoodQty: plywoodCount,
			plywoodWF: plywoodWasteFactorPercentage,
			hardwareSlideCount: slideCount,
		};
	},

	calculateTile: function (w, d, h) {
		let tileAreaInFeet = (w * h) / 144;
		let boxCount = boxRound(tileAreaInFeet);

		let cementBoardAreaInFeet = (w * h) / 144;
		let cementBoardCount = plywoodRound(cementBoardAreaInFeet);
		let cementBoardWasteFactorPercentage =
			((cementBoardCount * 32 - cementBoardAreaInFeet) /
				(cementBoardCount * 32)) *
			100;
		console.log(
			"You are using" +
				plywoodCount +
				" pieces of plywood at a waste factor of " +
				plywoodWasteFactorPercentage +
				"%"
		);

		let groutCount = 1;
		let adhesiveCount = 1;
		return {
			tileArea: tileAreaInFeet,
			tileBoxCount: boxCount,
			tileWF: twoByFourWasteFactorPercentage,
			cementBoardArea: cementBoardAreaInFeet,
			cementBoardQty: cementBoardCount,
			cementBoardWF: cementBoardWasteFactorPercentage,
			groutQty: groutCount,
			thinSet: adhesiveCount,
		};
	},

	calculateWall: function (w, d, h) {
		let twoByFourLengthInFeet = ((w / 16 + 1) * h + 2 * (w * h)) / 12;
		// below will give actual count of 2x4 material at 8 foot lengths
		let twoByFourLengthCount = roundUpEight(twoByFourLengthInFeet);
		let twoByFourWasteFactorPercentage =
			((twoByFourLengthCount * 8 - twoByFourLengthInFeet) /
				(twoByFourLengthCount * 8)) *
			100;
		console.log(
			"You are using" +
				twoByFourLengthCount +
				" lengths of 2x4 at a waste factor of " +
				twoByFourWasteFactorPercentage +
				"%"
		);

		//Calculating plywood material below
		let gypsumBoardAreaInFeet = (w * h) / 144;
		let gypsumBoardCount = plywoodRound(gypsumBoardAreaInFeet);
		let gypsumBoardWasteFactorPercentage =
			((gypsumBoardCount * 32 - gypsumBoardAreaInFeet) /
				(gypsumBoardCount * 32)) *
			100;
		console.log(
			"You are using" +
				gypsumBoardCount +
				" pieces of gypsumBoard at a waste factor of " +
				gypsumBoardWasteFactorPercentage +
				"%"
		);
		return {
			twoByFourLength: twoByFourLengthInFeet,
			twoByFourQty: twoByFourLengthCount,
			twoByFourWF: twoByFourWasteFactorPercentage,
			gypsumBoardArea: gypsumBoardAreaInFeet,
			gypsumBoardQty: gypsumBoardCount,
			gypsumBoardWF: gypsumBoardWasteFactorPercentage,
		};
	},

	calculateLadder: function (w, d, h) {
		let twoByFourLengthInFeet = (h * 2) / 12;
		let twoByFourLengthCount = roundUpEight(twoByFourLengthInFeet);
		let twoByFourWasteFactorPercentage =
			((twoByFourLengthCount * 8 - twoByFourLengthInFeet) /
				(twoByFourLengthCount * 8)) *
			100;
		console.log(
			"You are using" +
				twoByFourLengthCount +
				" lengths of 2x4 at a waste factor of " +
				twoByFourWasteFactorPercentage +
				"%"
		);

		//Calculating rod material below
		let rodLengthInFeet = (w - 3) * ((h / 12 - 1) * (w - 1.5));
		let rodCount = roundUpFour(rodLengthInFeet);
		let rodWasteFactorPercentage =
			((rodCount * 12 - rodLengthInFeet) / (rodCount * 12)) * 100;
		console.log(
			"You are using" +
				rodCount +
				" lengths of rod at a waste factor of " +
				rodWasteFactorPercentage +
				"%"
		);
		console.log("Your overall average waste factor is " + averageWF + " %");
		return {
			twoByFourLength: twoByFourLengthInFeet,
			twoByFourQty: twoByFourLengthCount,
			twoByFourWF: twoByFourWasteFactorPercentage,
			rodLength: rodLengthInFeet,
			rodQty: rodCount,
			rodWF: rodWasteFactorPercentage,
		};
	},

	// Rounding Functions for use in all calculations
	roundUpEight: function (input) {
		if (input < 8) return 1;
		if (input > 8 && input < 16) return 2;
	},

	roundUpFour: function (input) {
		if (input < 4) return 1;
		if (input > 4 && input < 8) return 2;
		if (input > 8 && input < 12) return 3;
	},

	plywoodRound: function (input) {
		if (input < 32) return 32;
		if (input > 32 && input < 64) return 2;
		if (input > 64 && input < 96) return 3;
		if (input > 96 && input < 128) return 4;
		if (input > 128 && input < 160) return 5;
	},

	boxRound: function (input) {
		if (input < 10) return 20;
		if (input > 20 && input < 30) return 2;
		if (input > 30 && input < 40) return 3;
		if (input > 40 && input < 50) return 4;
		if (input > 50 && input < 60) return 5;
		if (input > 60 && input < 70) return 6;
		if (input > 70 && input < 80) return 7;
		if (input > 80 && input < 90) return 8;
		if (input > 90 && input < 100) return 9;
		if (input > 100 && input < 110) return 10;
	},
};
