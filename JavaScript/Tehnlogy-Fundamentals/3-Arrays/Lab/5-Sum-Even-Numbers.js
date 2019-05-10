function sumEvenNumbers(array) {
    let evenSum = 0;
    for (let i = 0; i < array.length; i++) {
        let currentElement = Number(array[i]);
        if (currentElement % 2 === 0) {
            evenSum += currentElement;
        }  
    }
    console.log(evenSum);
}
sumEvenNumbers(['1','2','3','4','5','6']);