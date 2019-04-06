// You will be given a string representing a username. The password will be that username reversed.
// Until you receive the correct password print on the console "Incorrect password. Try again.".
// When you receive the correct password print "User {username} logged in." 
// However on the fourth try if the password is still not correct print "User {username} blocked!"
// and end the program. 
// The input comes as an array of strings.

function login (username) {
    let n = username.length;
    let sum = '';

    for (let i=1; i <= n; i++);{
        let currentLetter = username[i];
        sum += currentLetter;
    }
    console.log(sum); 
}
login('dani')

