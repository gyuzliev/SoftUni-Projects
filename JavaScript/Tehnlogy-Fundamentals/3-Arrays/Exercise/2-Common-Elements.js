// 2.	Common Elements

// Write a JS function, which prints common elements in two arrays. Print all matches on separate lines.
// Compare the first array with the second array.
// Examples
// Input	Output
// ["Hey", "hello", 2, 4, "Pesho", "e"],
//  ["Pecho", 10, "hey", 4, "hello", "2"]	hello
// 4
// ["S", "o", "f", "t", "U", "n", "i", " "],
// ["s", "o", "c", "i", "a", "l"]	o 
// i

function commonElements(arr1,arr2) {
    let firstArray = arr1;
    let secondArray = arr2;
  

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                let areCommon = arr1[i];
                console.log(areCommon);
            }
        }
    }
}
commonElements(["Hey", "hello", 2, 4, "Pesho", "e"], ["Pecho", 10, "hey", 4, "hello", "2"]);