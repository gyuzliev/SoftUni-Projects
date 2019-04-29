function dayOfWeek(num) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    let dayNumber = Number(num) - 1;
    if (num >= 1 && num <= 7) {
        console.log(days[dayNumber]);
    } else {
        console.log('Invalid day!');
    }
}
dayOfWeek('8');