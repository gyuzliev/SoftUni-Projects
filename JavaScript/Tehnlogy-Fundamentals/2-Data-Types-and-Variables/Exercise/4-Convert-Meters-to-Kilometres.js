// You will be given a number that will be distance in meters. 
// Write a program that converts meters to kilometers formatted 
// to the second decimal point.

// Examples
// Input	Output
// 1852	1.85
// 798	0.80

function metersToKilometers(meters) {
    meters = Number(meters);
    let kilometers = meters / 1000;
    console.log(kilometers.toFixed(2));
}
metersToKilometers('1852');