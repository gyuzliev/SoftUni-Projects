function solve(searchedString, char, stringToMach) {
    let modificatedString = searchedString.replace('_', char);
    
    if(modificatedString === stringToMach) {
        console.log('Matched');
    }
    else {
        console.log("Not Mactched");
        
    }
}