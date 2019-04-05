// Write a JS function that rounds numbers to specific precision.
// The input comes as two numbers. The first value is the number to be rounded and the second is the precision 
// (significant decimal places). If a precision is passed, that is more than 15 it should automatically be reduced to 15.
// Remove trailing zeroes, if any ( you can use parseFloat() )
// The output should be printed to the console. Do not print insignificant decimals.

// Examples
// Input	Output		Input	Output
// 3.1415926535897932384626433832795,2	3.14		10.5,3	10.5


 function rounding (arg1, arg2) {
     let firstNumber = Number(arg1);
     let secondNumber = Number(Math.trunc(arg2));

     if (secondNumber > 15){
         secondNumber = 15;
         let num = (firstNumber.toFixed(secondNumber));
         num = parseFloat(num);
         console.log(num); 
     } else {
         let num = (firstNumber.toFixed(secondNumber));
         num = parseFloat(num);
         console.log(num);
     }
 }
 rounding('3.1415926535897932384626433832795', '2');