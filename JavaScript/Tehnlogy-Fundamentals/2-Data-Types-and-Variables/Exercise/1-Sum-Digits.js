// 1-Sum Digits

// You will be given a single number. 
// Your task is to find the sum of its digits.

// Examples
// Input	Output
// 245678	32
// 97561	28
// 543	    12

function sumDigits(num) {
    let sum = 0;
    num = Number(num);
    while (num !== 0) {
        let lastNumber = num % 10;
        sum += lastNumber;
        num = parseInt(num / 10);
    }
    console.log(sum);
    
}
sumDigits('543');