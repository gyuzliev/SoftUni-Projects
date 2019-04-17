// 7-Lower-or-Upper

// Write a JS function that prints whether a given character 
// is upper-case or lower-case.

// Examples
// Input	Output
// L	    upper-case
// f	    lower-case

function lowerOrUpper(letter) {
    let myInput = letter;
    if ( myInput >= 'a' && myInput <= 'z') {
        console.log('lower-case');
    }
    else {
        console.log('upper-case');
    }
}
lowerOrUpper('L');