// 3.	Merge Arrays
// Write a JS function which receives two arrays and merges them into a third array.
//   If the index of the element is even, add into the third array the sum of both elements at that index. 
//   If the index of the element is odd, add the concatenation of both elements at that index.
// As input you will receive two string arrays.
// As output you should print the resulting third array, each element separated by "  -  "

// Examples
// Input	Output
// ["5", "15", "23", "56", "35"],
// ["17", "22", "87", "36", "11"]	22 - 1522 - 110 - 5636 - 46
// ["13", "12312", "5", "77", "4"],
// ["22", "333", "5", "122", "44"]	35 - 12312333 - 10 - 77122 - 48

function merageArrays(array1, array2) {
    firstArray = array1;
    secondArray = array2;
    resultArray = [];
    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 === 0){
            resultArray[i] = Number(firstArray[i]) + Number(secondArray[i]); 
        } else {
            resultArray[i] = firstArray[i] + secondArray[i];
        }
    }
    console.log(resultArray.join(' - '));
}

merageArrays(["13", "12312", "5", "77", "4"],
["22", "333", "5", "122", "44"]
);