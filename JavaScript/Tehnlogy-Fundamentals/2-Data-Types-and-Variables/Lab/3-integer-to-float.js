function solve(num1, num2, num3) {
    let sum = num1 + num2 + num3;

    let result = sum % 1;
    // let result = parseInt(sum);
    //if (number.isInteger(sum));

    if (result === 0) {
        console.log(`${sum} - Integer`);
    }
    else {
        console.log(`${sum} - Float`);
        
    }
}     