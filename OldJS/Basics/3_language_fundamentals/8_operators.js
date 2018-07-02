/**
 * 1. Arithmatic operators <- maths operators
 * 2. Assignment operators <- related to assign values 
 * 3. Comparision op 
 * 4. Conditional <- like if else 
 * 5. Logical <- 
 *
 *
 * homework
 * https://www.w3schools.com/jsref/jsref_operators.asp
 *
 * Arithmatic
 * Assignemnt
 * String
 * comparision - add the missing ones
 * 
 * 
 */



/**
 * 	Comparision operators (also called relational operators) - always returns a boolean value
 * 
 * 1. > Greator than
 * 2. < Less than
 * 3. == equals
 * 4. != not equal
 * 
 */

/**
 * > < Operators
 *  
 * 1.) Compairing two values for greater than less than
 * < - Greater than (open mouth)
 * > - Less than (closed mouth)
 * 
 * Always interprits left to right 
 */
var testBooleanValue = 10 < 15; //--> true
console.log(testBooleanValue);

testBooleanValue = ((5+3)/2)*3 > ((2+4)-4)*5; // --> true
console.log(testBooleanValue);

testBooleanValue = 5 > 5; // --> false
console.log(testBooleanValue);

testBooleanValue = 4 < 5; // --> true
console.log(testBooleanValue);

/**
 * 2.) equality check - compairing two values for their equality (whether the both values are same) 
 * Does SL is same as America ? false
 *
 * == operator is used 
 * 
 */

var priceOfAnApple = 5.50;
var priceOfAnOrange = 6.50;

if (priceOfAnApple == priceOfAnOrange) {
	console.log("Same Price");
} else {
	console.log("Difference Price");
}

var equalTest = 10 == 100;
console.log(equalTest);


var testStringOne = "Hello";
if ("Hello" == testStringOne) {
	console.log("Same String....");
}

/**
 * When you are compairing strings case matters, if the case is different it is not equals.
 * 
 */

var stringONe = "Sydney";
var stringTwo = "sydney";
if(stringONe == stringTwo) {
	console.log("same again...");
} else {
	console.log("not the same sting as case is simple in string 2.....");
}


/**
 * Unequal operator - not equal 
 * Check something is not equal to aother
 *
 * != 
 *
 * does SL is different to America
 * 
 */

var firstName = "kushlani";
var lastName = "sandamali";

if (firstName != lastName) {
	console.log("First name is not equal to last name");
} else {
	console.log("Both are same...");
}

var x = true;
var y = false;
var z = x != y;
console.log(z);

/**
 *
 * Logical  Operators
 *
 *	&& --> And
 *	|| --> or
 *	! --> not 
 *
 *
 * 		&& --> Both side has to be true 
 *   		true && true --> true
 *   		false && true --> false
 *   		false && false --> false
 *   		true && false --> false
 *
 *		|| --> one side has to be true at least 
 *			true || true --> true
 *			true || false --> true
 *			false || true --> true
 *			false || false --> false
 *
 * 		! --> not , act on boolean values, convert the value to opppsit value, applies at the begining 
 * 		true --> false 
 * 		false --> true
 *			
 * 
 */

var valueOne = 10;
var valueTwo = 20;

if (valueOne > 5 && valueTwo > 15) {
	console.log("Both True");
}

if ( 10 > 7 && 8 < 12 ) {
	console.log("OK");
}


if (5 > 7 || 3 > 1) {
	console.log("OR TEST...");
}


var notDemo = false;
var result = !notDemo;
console.log(result);

if ( !(10 > 100)) {
	console.log("AAA");
} else {
	console.log("BBB");
}




//Homework
//
var yy = 5;
var xx = yy + 2;


