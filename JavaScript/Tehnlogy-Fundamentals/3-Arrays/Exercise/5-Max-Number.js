// 5-Max-Number

// Write a JS function to find all the top integers in an array.
// A top integer is an integer which is bigger than all the elements to its right. 
// Print all top integers on the console.
// Examples
// Input	Output
// [1, 4, 3, 2]	4 3 2
// [14, 24, 3, 19, 15, 17]	24 19 17
// [41, 41, 34, 20]	41 34 20
// [27, 19, 42, 2, 13, 45, 48]	48

function maxNumber(input) {
    let arr = input;
    let newArr = [];
    let newA = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1] || i == arr.length-1) {
            newArr += arr[i] + ' ';
        }
        
    }
    console.log(newArr);
    
    

}
maxNumber([1, 4, 3, 2]);