/**
 * Used to check a condition and return a value accordingly.
 * Same as if else, used with assignments. We dont need to use a variable always to keep the value, we can directly get the value through
 * a console.log.
 *
 * format: //All of the following is mandatory except the assignment
 *
 *   assignment = condition ? true value : false value;
 *
 * eg : var x = 10 > 5 ? "10 is grater than 5" : "5 is grater than 10"
 * cl(x);
 *
 * 
 * var x = "";
 * if (10 > 5) {
 * 		x = "10 is grater than 5";
 * } else {
 * 		x = "5 is grater than 10";
 * }
 */

var isRainingToday = true;
var displayMsg = isRainingToday ? " Today is raining bring an umbrella" : "Today is not raining, bring your cap...";
console.log(displayMsg);

var moneyAtHand = 15;
var priceOfABanana = 12;
var msg = moneyAtHand >= priceOfABanana ? "can buy" : "cannot buy"; // assing the value to a variable.
console.log(msg);
console.log(moneyAtHand >= priceOfABanana ? "can buy" : "cannot buy"); // here we dont assign the value to a variable 

console.log( 10 > 5 ? "I am returning true scenario" : "this is the false scenario" );



var testValue = 454367899009087668978977879;
var result = (testValue % 2) == 1 ? "Odd number" : "Even number";
console.log(result);
//or
var result = (testValue % 2) !== 0 ? "Odd number" : "Even number";


