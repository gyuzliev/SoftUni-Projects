function reversedArray(inputArray) {
    let outputArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        outputArray.push(inputArray[inputArray.length - 1 - i]);   
    }
    console.log(outputArray.join(' '));
}
reversedArray(['a', 'b', 'c', 'd', 'e']);