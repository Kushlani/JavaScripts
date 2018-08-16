"use strictly"

/**
 * A variables is used to keep a value in the memory. 
 *
 * 
 * Variable lifecycle
 *
 * 1.) Define a variable, definition --> var x; //This is the variable creation
 * 2.) Initilization. Assign a value x = 10;
 * 3.) Access. Use the variable. put a value or get the value 
 *
 * 
 */




/**
 * Every variable has a scope..
 * Scope defines who has the access to the variable..
 * Variables defined inside braces are visible only within the braces. FOR JS THIS IS APPLICABLE ONLY FOR METHOD {}
 * visibility means whether someone can access the vairbale, put a value or get a value
 * visibility == accessibility
 *
 * 
 */

var outside = "I am outside.....";

if (true) {
	var inside = "I am inside a If block";
}

for(var x = 0; x < 5; x++) {
	console.log(x);
	var xx = "I am inside a loop";
}

/**
 * ALL OF THE ABOVE VARIABLES ARE VISIBLE OUTSIDE.
 */
console.log(outside); //
console.log(inside); //
console.log(x); //
console.log(xx); //


/**
 * But variables defined inside a function are not visible to outside.
 *
 * 
 */
function testFunction() {
	var insideFunction = "I am inside a function";
	console.log(" THIS IS INSIDE FUNTION : " + insideFunction); //
}
testFunction();

console.log("THIS IS OUTSIDE FUNCTION : " + insideFunction); //

