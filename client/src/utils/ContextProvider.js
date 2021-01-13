// use reducer - look into last class?

// Function to CALCULATE CHAIR
function calculateChair(props) {
	// Get values from userState inputs
	let inputWidth;
	let inputHeight;
    let inputDepth;
    let averageWF = (twoByFourWasteFactorPercentage+plywoodWasteFactorPercentage+rodWasteFactorPercentage)/3;

	//Calculating 2x4 wood material below
	let twoByFourLengthInFeet =
		(inputHeight * 2 + (inputWidth - 1.5) + 34.5) / 12;
	// below will give actual count of 2x4 material at 8 foot lengths
	let twoByFourLengthCount = roundUpEight(twoByFourLengthInFeet);
	let twoByFourWasteFactorPercentage =
		((twoByFourLengthCount * 8 - twoByFourLengthInFeet) /
			(twoByFourLengthCount * 8)) *
		100;
	console.log("You are using" + twoByFourLengthCount + " lengths of 2x4 at a waste factor of " + twoByFourWasteFactorPercentage + "%");

	//Calculating plywood material below
    let plywoodAreaInFeet = (inputWidth * inputDepth) / 12;
    let plywoodCount = plywoodRound(plywoodAreaInFeet);
    let plywoodWasteFactorPercentage =
        ((plywoodCount * 32 - plywoodAreaInFeet)/
            (plywoodCount * 32)) * 100;
    console.log("You are using" + plywoodCount + " pieces of plywood at a waste factor of " + plywoodWasteFactorPercentage + "%")

    //Calculating rod material below
    let rodLengthInFeet = (inputWidth-1.5)/12;
    let rodCount = roundUpFour(rodLengthInFeet);
    let rodWasteFactorPercentage =
        ((rodCount * 12 - rodLengthInFeet)/
            (rodCount * 12)) * 100;
    console.log("You are using" + rodCount + " lengths of rod at a waste factor of " + rodWasteFactorPercentage + "%")
    console.log("Your overall average waste factor is " + averageWF + " %")

}

// Function to CALCULATE BOOKCASE
function calculateBookcase(props) {
	// Get values from userState inputs
	let inputWidth;
	let inputHeight;
    let inputDepth;
    let averageWF = 0;



}

// Rounding Functions for use in all calculations
function roundUpEight(input) {
	if (input < 8) return 1;
	if (input > 8 && input < 16) return 2;
}

function roundUpFour(input) {
	if (input < 4) return 1;
	if (input > 4 && input < 8) return 2;
	if (input > 8 && input < 12) return 3;
}

function plywoodRound(input) {
    if (input < 32) return 32;
    if (input > 32 && input < 64) return 2;
    if (input > 64 && input < 96) return 3;
    if (input > 96 && input < 128) return 4;
	if (input > 128 && input < 160) return 5;
}