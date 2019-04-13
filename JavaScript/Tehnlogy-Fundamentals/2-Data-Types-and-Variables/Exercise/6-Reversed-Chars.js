// 6-Reversed-Chars

// Write a program that takes 3 parameters (characters) and prints them in 
// reversed order with a space between them.
// Examples
// Input	Output
// 'A',
// 'B',
// 'C'	    C B A
// '1',
// 'L',
// '&'	    & L 1


function reversadChar() {
    console.log(`${arguments[2]} ${arguments[1]} ${arguments[0]}`);
}
reversadChar('A','B','C');