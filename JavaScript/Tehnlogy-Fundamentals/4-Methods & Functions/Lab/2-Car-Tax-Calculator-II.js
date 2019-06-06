function solve(power, age) {
    let baseTax = calculateBaseTax(power);
    let vehicleCoefficient = calculateCoefficient(age);

    let totalTax = baseTax * vehicleCoefficient;

    console.log(totalTax.toFixed(2) + ' lv.');
    


    function calculateBaseTax(power) {
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
    
        return tax;   
    }

    function calculateCoefficient(age) {
        if (age < 5) {
            return 2.8;
        }
        if (5 <= age && age < 14) {
            return 1.5;
        }

        return 1;
    }
}

solve(45,10)