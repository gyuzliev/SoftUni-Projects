// Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder. 
// The input comes as single number parameter. The bounders are:
// •	0-2 – baby; 
// •	3-13 – child; 
// •	14-19 – teenager;
// •	20-65 – adult;
// •	>=66 – elder; 
// •	All the values are inclusive.
// Examples
// Input	Output
// 20	adult
// 1	baby
// 100	elder

function age(years) {
    years = Number(years);
    if ((years == 0) || (years == 1) || (years == 2)) {
        console.log('baby');
    } else if ((years >= 3) && (years <= 13)) {
        console.log('child');
    } else if ((years >= 14) && (years <= 19)) {
        console.log('teenager');
    } else if ((years >= 20) && (years <= 65)) {
        console.log('adult');
    } else if (years >= 66) {
        console.log('elder')
    } else {
        console.log('Type another year!')
    }

}