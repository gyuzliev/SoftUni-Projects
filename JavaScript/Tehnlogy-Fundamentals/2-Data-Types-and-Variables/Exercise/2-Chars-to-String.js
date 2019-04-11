// 2-Chars-to-String

// Write a function that receives 3 parameters.Each parameter is a single character. 
// Combine all the characters into one string and print it on the console.

// Examples
// Input	Output
// a
// b
// c	    abc
// %
// 2
// o	    %2o
// 1
// 5
// p	    15p

function charToString(arg1,arg2,arg3) {
    console.log(`${arg1}${arg2}${arg3}`);
}
charToString('a','b','c');