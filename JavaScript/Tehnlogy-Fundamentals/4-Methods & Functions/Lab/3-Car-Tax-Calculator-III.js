
function solve(type, volumeOrPower, age) {
    let baseTax = 0;
    let totalTax = 0;

    if (type == 'motorcycle') {
        baseTax = calculateMotorcycleBaseTax(volumeOrPower);
        totalTax = baseTax;
    }
    else {
        baseTax = calculateCarBaseTax(volumeOrPower);
        let vehicleCoefficient = calculateCoefficient(age);
        totalTax = baseTax * vehicleCoefficient;
    }

    console.log(totalTax.toFixed(2) + ' lv.');
    


    function calculateCarBaseTax(power) {
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

    function calculateMotorcycleBaseTax(volume) {
        if (volume > 750) {
            return 125;
        }

        if (volume > 490) {
            return 94;
        }

        if (volume > 350) {
            return 63;
        }

        if (volume > 250) {
            return 44;
        }

        if (volume > 125) {
            return 31;
        }

        return 15;
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

solve('motorcycle', 450, 10);