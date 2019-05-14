function equalArrays(arr1,arr2) {
    let areEqual = true;
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        currentElement1 = Number(arr1[i]);
        sum += currentElement1
    }
    for (let i = 0; i < arr2.length; i++) {
        currentElement2 = Number(arr2[i]);   
    }
    for (let i = 0; i < arr1.length; i++) {
        if (currentElement1 !== currentElement2) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
        
    }
    if(areEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
    
    
}
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);