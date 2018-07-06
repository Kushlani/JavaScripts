/**
 * Data types are different kinds of data. Data structure is who keeps/stores that data for updating and organizing purposes.(ex: array and object)
 * 
 * In programming, data type is an important concept.

To be able to operate on variables, it is important to know something about the type.

Without data types, a computer cannot safely solve this:

/**
 * Variables are used to store data 
 * There are primitive data types where you can assign to variables.
 *      var <variableName> = <data> <--This data section can be a one of following types
 * There are 6 data types supported by JS
 *      1. undefined <- special case in JS
 *      2. null <- when therer is no value
 *      3. boolean <- true false values
 *      4. number <- number values, floating point 
 *      5. string <- text values
 *      6. symbol <- DONT WORRY NOW
 * 
 * These are the data types supported by JS, it doesnt matter those are assigned to a variable or not 
 * console.log("Hello World") <- here we are printing a string literal/value
 * var name="Kush" <- here you are assigning a string literal/value to a variable
 *
 *
 *
 * JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
	var x;           // Now x is undefined
	x = 5;           // Now x is a Number
	x = "John";      // Now x is a String

*/

//String 
var x = "How are you";
var y = "Hello 'Kush'";
console.log(x,y);

// Number 
var a = 4;
var b = 5;
var c = a + b;
console.log(c);

// Boolean
var x = 5;
var y = 5;
var z = 6;
console.log(x == y);       // Returns true
console.log(x == z);       // Returns false
console.log(z < y);		   // Returns false


// Undefined - In JavaScript, a variable without a value, has the value undefined
var x;
var fruit;

var car = "";   //An empty value has nothing to do with undefined.An empty string has both a legal value and a type.


// Null - Used to indicate there is no value....In JavaScript null is "nothing".
//  It is supposed to be something that doesn't exist.Unfortunately, in JavaScript, the data type of null is an object.

//At this point the variable value is unknown
var sizeOfTheUniverse = null;
console.log(sizeOfTheUniverse);