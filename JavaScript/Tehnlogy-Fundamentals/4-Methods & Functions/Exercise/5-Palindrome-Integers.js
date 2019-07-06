function palindrome(input) {
    let inputArray = input;

    let isPalindrome = (a,b) => a === b;

    for (let i = 0; i < inputArray.length; i++) {
        let currentNumber = inputArray[i];
        let revursedNumber = Number(currentNumber
            .toString()
            .split('')
            .reverse()
            .join(''));

            console.log(isPalindrome(currentNumber,revursedNumber));
            
    }
}

palindrome([32,2,232,1010]);