function reversedArray(num,inputArr) {
    num = Number(num);
    newArray = [];

    for (let i = 0; i < num; i++) {
        newArray.unshift(inputArr[i]);
    }
    console.log(newArray.join(' '));
}
reversedArray(3, [10, 20, 30, 40, 50]);