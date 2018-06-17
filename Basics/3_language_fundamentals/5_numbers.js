/**
 * Numaric values
 */
var myage = 31;
console.log(myage);

//This can be floating point as well
var priceOfAMango = 12.39;
console.log("Mango Price $ " + priceOfAMango);

var noOfMangosNeeded = 13;
console.log("No of Mangos " + noOfMangosNeeded);

var totalCost = priceOfAMango * noOfMangosNeeded;

console.log("Total cost for mangos $ " + totalCost);

var dollarExchangeRate = 121.72;
console.log("Total Cost in Ruppees Rs " + totalCost * dollarExchangeRate);

var ruppesAtHand = 69732.89;
console.log("How many mangos I can buy " + ruppesAtHand / (priceOfAMango * dollarExchangeRate));

var test1 = "40";
var test2 = "20";
console.log(test1 + test2); // --> 4020

test1 = 40;
test2 = 20;
console.log(test1 + test2); //60