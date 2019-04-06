// Write a function to display numbers from given start to given end and their sum. 
// The input comes as two number parameters.

function printAndSum(start, end) {
    let sum = 0;
    let sequance = '';

    for (let i = start; i <= end; i++) {
        sum += i;
        sequance += i + ' ';
    } 
    console.log(`${sequance.trim()}`); 
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);