function reversedArray(inputArray) {

    for (let i = 0; i < inputArray.length/2; i++) {
        let currentValue = inputArray[i];
        let reversedValue = inputArray[inputArray.length - 1 - i];

        inputArray[i] = reversedValue;
        inputArray[inputArray.length - 1 - i] = currentValue; 
    }
    console.log(inputArray.join(' '));
}
reversedArray(['a', 'b', 'c', 'd', 'e']);