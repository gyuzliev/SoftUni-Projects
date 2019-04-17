// 8-Calculator

// Write a JS function that receives 3 parameters: a number, an operator (string) and another number. 
// Print the result of the calculation on the console formatted to the second decimal point 
// Examples
// Input	Output
// 5
// +
// 10	    15.00
// 25.5
// -
// 3	    22.50

function calculator(num1, symbol, num2) {
    num1 = Number(num1);
    num2 = +(num2);
    let operator = symbol;
    let result = 0;
    if (operator == '+') {
        result = num1 + num2;
    }
    else if (operator == '-') {
        result = num1 - num2;
    }
    else if (operator == '*'){
        result = num1 * num2;
    }
    else if (operator == '/') {
        result = num1 / num2;
    }
    console.log(result.toFixed(2));
}
calculator('5', '+', '10');