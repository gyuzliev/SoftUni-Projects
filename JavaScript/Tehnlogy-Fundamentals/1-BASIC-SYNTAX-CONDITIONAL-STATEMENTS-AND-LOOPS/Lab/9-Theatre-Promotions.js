function solve(typeOfDay, age) {
    if (0 <= age && age <= 18) {
        if (typeOfDay == 'Weekday') {
            console.log('12$');
        }
        else if (typeOfDay == 'Weekend') {
            console.log('15$');
        }
        else if (typeOfDay == 'Holiday') {
            console.log('5$');
        }
    }
    else if (18 < age && age <= 64) {
        switch (typeOfDay) {
            case 'Weekday':
                console.log('18$');
                break;
            case 'Weekend':
                console.log('20$');
                break;
            case 'Holiday':
                console.log('12$');
                break;
        }
    }
    else if (64 < age && age<= 122) {
        switch (typeOfDay) {
            case 'Weekday':
                console.log('12$');
                break;
            case 'Weekend':
                console.log('15$');
                break;
            case 'Holiday':
                console.log('10$');
                break;
        }
    }
    else {
        console.log('Error!'); 
    }
}
solve('Weekday', 42);