function substraction(inputArray) {
    let evenSum = 0;
    let oddSum = 0;

    for (let element of inputArray) {
        if (element % 2 === 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
        substractElements = evenSum - oddSum;
    }
    console.log(substractElements);
}
substraction([1, 2, 3, 4, 5, 6]);