function charsInRange(char1, char2) {
    let startChar = char1.charCodeAt(0);
    let endChar = char2.charCodeAt(0);
    let charsInRange = [];

    if (char1 > char2) {
        let temp = startChar;
        startChar = endChar;
        endChar = temp;
    }


    for (let i = startChar + 1; i < endChar; i++) {
        charsInRange.push(String.fromCharCode(i));
        
    }

    console.log(charsInRange.join(' '));
    
}
charsInRange('a', 'd');


