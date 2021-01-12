// use reducer - look into last class

function calculateChair (props) {
    // Get values from userState inputs
    // let inputWidth = {props.userParams...}
    // let inputHeight = {props.userParams...}
    // let inputDepth = {props.userParams...}
    let twoByFourLengthCount = ((inputHeight*2)+(inputWidth-1.5)+(34.5))/96
    //actually has to be the next integer that's divisible by 8 if lengthcount is above 
        // switch case if num<8 return 8
        // switch case if 8<num<16 return 16
    let twoByFourLengthCountRoundUp = Math.ceil(twoByFourLengthCount)
    let twoByFourLengths = 16
    // let twoByFourWasteFactor = boughtmaterial-actual material / boughtmaterial
}