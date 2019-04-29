function sumFirstAndLast (myArr) {
    let arr = myArr;

    let firstElement = Number(arr.shift());
    let lastElement = Number(arr.pop());
    let totalSum = firstElement + lastElement;
    console.log(totalSum);
}
sumFirstAndLast(['20', '30', '40']);