//The + operator can also be used to add (concatenate) strings.
/**
 * With + Operator
 * numbers --> sums up
 * strinng --> always get concatenated, even when there is a number
 */
var x = "Hello";
var y = "There";
console.log ("Hello" + " " + "There");


var text = "";
console.log (text + "*");


//The += assignment operator can also be used to add (concatenate) strings:

var k = "Kushlani ";
k += "Sumudumali";
console.log (k);


//Adding two numbers, will return the sum, but adding a number and a string will return a string:

var a = "Hi";
var b = 2;
console.log ("Hi " + 2);


var c = 3 + 2;
var d = 4 + 3;
var e = "Hello" + 50; //e is a string value --> "Hello" + "50"
console.log (c,d,e);