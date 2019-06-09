function solve(firstOperand, secondOperand, operator) {
    let operation;
    
    switch (operator) {
        case 'multiply':
            operation = (a, b) => a * b;
            break;
        case 'divide':
            operation = (a, b) => a / b; 
            break;
        case 'add':
            operation = (a, b) => a + b;
            break;
        case 'substract':
            operation = (a, b) => a - b;
            break;
    }
    let result = operation(firstOperand, secondOperand);
    console.log(result);
    
}
solve(5, 5, 'multiply');

// В Judge е объркано 'supstract'!!!