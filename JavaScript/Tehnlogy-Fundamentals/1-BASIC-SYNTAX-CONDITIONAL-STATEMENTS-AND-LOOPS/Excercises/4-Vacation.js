// You are given a group of people, type of the group, and day of the week they are going to stay. 
// Based on that information calculate how much they have to pay and print that price on the console. 
// Use the table below. In each cell is the price for a single person. The output should look like that:
//  "Total price: {price}". The price should be rounded to the second decimal point.
// 	Friday	Saturday	Sunday
// Students	8.45	9.80	10.46
// Business	10.90	15.60	16
// Regular	15	20	22.50

// There are also discounts based on some conditions:
// ·	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
// ·	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free.
// ·	Regular – if the group is bigger than or equal 10 and less than or equal to 20 reduce the total price by 5% 
// You should reduce the prices in that EXACT order



function vacation(peopleCount, typeOfGroup, weekDay) {
    let totalPrice = 0;
    peopleCount = Number(peopleCount);

    if ((typeOfGroup == 'Students') && (weekDay == 'Sunday')){
        totalPrice = 10.46 * peopleCount;
        if (peopleCount >= 30){
            totalPrice *= 0.85;
        }
    } else if ((typeOfGroup == 'Students') && (weekDay == 'Saturday')){
        totalPrice = 9.80 * peopleCount;
        if (peopleCount >= 30){
            totalPrice -= (totalPrice * 0.15);
        }
    } else if ((typeOfGroup == 'Students') && (weekDay == 'Friday')){
        totalPrice = 8.45 * peopleCount;
        if (peopleCount >= 30){
            totalPrice -= (totalPrice * 0.15);
        }
    } else if ((typeOfGroup == 'Business') && (weekDay == 'Sunday')){
        totalPrice = 16 * peopleCount;
        if (peopleCount >= 100){
            totalPrice = 16 * (peopleCount - 10);
        }
    } else if ((typeOfGroup == 'Business') && (weekDay == 'Saturday')){
        totalPrice = 15.60 * peopleCount;
        if (peopleCount >= 100){
            totalPrice = 15.60 * (peopleCount - 10);
        }
    } else if ((typeOfGroup == 'Business') && (weekDay == 'Friday')){
        totalPrice = 10.90 * peopleCount;
        if (peopleCount >= 100){
            totalPrice = 10.90 * (peopleCount - 10);
        }
    } else if ((typeOfGroup == 'Regular') && (weekDay == 'Sunday')){
        totalPrice = 22.50 * peopleCount;
        if ((peopleCount >= 10) && (peopleCount <= 20)){
            totalPrice *= 0.95;
        }
    } else if ((typeOfGroup == 'Regular') && (weekDay == 'Saturday')){
        totalPrice = 20 * peopleCount;
        if ((peopleCount >= 10) && (peopleCount <= 20)){
            totalPrice *= 0.95;
        }
    } else if ((typeOfGroup == 'Regular') && (weekDay == 'Friday')){
        totalPrice = 15 * peopleCount;
        if ((peopleCount >= 10) && (peopleCount <= 20)){
            totalPrice *= 0.95;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}   
vacation(['40', 'Regular', 'Saturday']);



