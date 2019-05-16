function condenseArray(arr) {
    let condensed = [];

    while (arr.length > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            condensed.push(arr[i] + arr[i + 1]);
        }
        arr = condensed.slice();
        condensed =[];
    }
    console.log(arr[0]);

}
condenseArray([2, 10, 3]);