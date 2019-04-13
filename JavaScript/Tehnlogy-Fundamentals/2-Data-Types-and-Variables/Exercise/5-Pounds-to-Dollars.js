// 5-Pounds-to-Dollars

//Write a JS function that converts British pounds to dollars 
// formatted to 3th decimal point. 
// 1 British Pound = 1.31 Dollars
// Examples
// Input	Output
// 80	    104.800
// 39	    51.090

function poundsToDollars(pounds) {
    pounds = Number(pounds);
    let dollars = pounds * 1.31;
    console.log(dollars.toFixed(3));
}
poundsToDollars('80');