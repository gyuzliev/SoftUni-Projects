function solve(power) {
    printCarTax(power);
}

function printCarTax(power) {
    let tax = 0;
    if (power <= 37) {
        tax = power * 0.43;
    }
    else if (37 < power && power <= 55) {
        tax = power * 0.50;
    }
    else if (55 < power && power <= 74.00) {
        tax = power * 0.68;
    }
    else if (74 < power && power <= 110.00) {
        tax = power * 1.38;
    }
    else if (110.00 < power) {
        tax = power * 1.54;
    }

    console.log(tax.toFixed(2) + ' lv.');
    
}
solve(57.50)