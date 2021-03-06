/* Logical Logical operators are usually used with comparison operators. If we want to compare more than one condition we can use logical operators.
 * Logical operators are used to determine the logics between variables or values.
 * 
 * Operator		Description
	&&			logical and
	||			logical or
	!			logical not

	JavaScript does not have a logical XOR operator.

 */

// && AND
var x = 10;
var y = 5;
console.log(x > 12 && y < 3);


// || OR
var a = 10;
var b = 5;
console.log(a > 7 || b < 3);


// ! NOT (we get the opposite value for the answer)
var c = 10;
var d = 5;
console.log (!(c == 7 || d == 3));
console.log (!(c > 7 || d > 3));

var todayIsSunneyDay = true;
console.log(" Sunny Day : " + todayIsSunneyDay);
console.log("With Not : " + !todayIsSunneyDay);


