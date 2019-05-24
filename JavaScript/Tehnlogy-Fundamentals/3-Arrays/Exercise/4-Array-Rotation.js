// 4-Array-Rotation

// Write a JS function that receives an array and number of rotations you have to perform 
// (first element goes at the end) Print the resulting array.
// Examples
// Input	Output
// [51, 47, 32, 61, 21],
// 2	32 61 21 51 47
// [32, 21, 61, 1],
// 4	32 21 61 1
// [2, 4, 15, 31],
// 5	4 15 31 2

function arrayRotation(inputArray, inputNumber) {
    let firstArray = inputArray;
    let num = inputNumber;
    let rotatedArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        while (i < num) {
            rotatedArray[rotatedArray.length] = firstArray[i];
            break;
        }
        rotatedArray[i] = firstArray[i];
        
    }
    console.log(rotatedArray);

}
arrayRotation([51, 47, 32, 61, 21], 2);