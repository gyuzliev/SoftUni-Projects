function oddAndEvenSum(num) {
    let oddSum = 0;
    let evenSum = 0;

    let numString = num.toString();
    let numArray = numString.split('');

    for (let element of numArray) {
        let currentElement = Number(element);
        if (currentElement % 2 === 0) {
            evenSum += currentElement;
        } 
        else {
            oddSum += currentElement;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);