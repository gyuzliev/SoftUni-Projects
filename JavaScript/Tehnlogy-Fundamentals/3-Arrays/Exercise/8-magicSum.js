function magicSum(myArr) {
    let arr = myArr[0].split(' ');
    let ourSum = Number(myArr[1]);
    let magic = [];

    for (let i = 0; i < arr.length; i++) {
        let firstCurrentElement = Number(arr[i]);
        for (let j = i +1; j < arr.length; j++) {
            let secondCurrentElement = Number(arr[j]);

            if (firstCurrentElement + secondCurrentElement === ourSum) {
                magic.push(firstCurrentElement+' '+secondCurrentElement);
            }
        }   
    }
    console.log(magic.join('\n'));
    // for (let elements of magic) {
    //     console.log(elements);
        
    // }
}
magicSum(['1 7 6 2 19 23', '8']);