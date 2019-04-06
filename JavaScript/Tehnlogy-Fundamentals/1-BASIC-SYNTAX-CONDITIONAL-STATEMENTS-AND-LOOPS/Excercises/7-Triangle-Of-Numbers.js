// Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.
// Constraints
// •	n will be in the interval [1...20].

function triangleOfNumbers (numer) {
    number = Number(numer);
    let sequence = '';

    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            sequence += i + ' ';
        }
        console.log(sequence);
        sequence = '';
    }
}
triangleOfNumbers(['5']);
