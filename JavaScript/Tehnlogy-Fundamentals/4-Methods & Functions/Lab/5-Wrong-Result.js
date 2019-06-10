function solve(numOne, numTwo, numThree) {
    if ((numOne && numTwo) >= 0) {
        if (numThree >= 0) {
            console.log('Positive');
        } else {
            console.log('Negative');
        }  
    } 

    else if ((numOne && numThree) >= 0) {
        if (numTwo >= 0) {
            console.log('Positive');
        } else {
            console.log('Negative');
        } 
    } 

    else if ((numTwo && numThree) >= 0) {
        if (numOne >= 0) {
            console.log('Positive');
        } else {
            console.log('Negative');
        } 
    }
    else if ((numOne && numTwo) < 0) {
        if (numThree >= 0) {
           console.log('Positive');
        } else {
            console.log('Negative');
        } 
    }
}
solve(5, 12, 15);