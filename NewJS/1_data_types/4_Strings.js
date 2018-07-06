/**
 *	IN JS YOU CAN USE BOTH SINGLE QUOTE AND DOWUBLE QUOTE TO INDICATE STRING LITERALS./VALUES
 *	BUT IN OTHER PROGRAMMING LANAGUAGES WE USE DOUBLE QUOTE
 *
 * 
 * Certain chrs have special meaning with regards to strings, for ex we use ' and "  for strings 
 * So in order to display these special chars we have to escape (it is like we are removing that special meaning ) them 
 * 	\ <-- Escape char
 * 			' or "  <--- " here we go \' \"somoe quote\" "
 *
 *  \n <-- New line
 *  \t <-- tab
 *  
 *
 * 
 */
console.log("Valid string literal");
console.log('Valid string literal');

//The following line is an error
//console.log("Special chars demo- "something ");
console.log("Special chars demo- \"something ");
console.log("Special chars demo- \"something\" ");
console.log('Special chars demo- "something" ');
console.log('Special chars demo- \'something\' ');
console.log("Special chars demo- 'something' ");

//Other special chars \n
console.log("New \n Line \n Demo ");
console.log("Tab \t demo.. \t\t\t tabs.. ");

console.log("Forward Slash\\");
console.log("Forward Slash\");

//Special characters
/* 	Code	Result		Description
	\'		  '			Single quote
	\"		  "			Double quote
	\\		  \			Backslash
*/


//Single quote
console.log("Hey how are you idiot? It\'s gone...");


//Double quote
console.log("Yes I am an \"Idiot\"");


//Backslash
console.log("The character \\ is called backslash");
console.log("The character \n is called backslash");
console.log("The character \t is called backslash");
console.log("The character \b is called backslash");


//Breaking long code lines
//For best readability, programmers often like to avoid code lines longer than 80 characters.
//If a JavaScript statement does not fit on one line, the best place to break it is after an operator: or a comma
//You can also break up a code line within a text string with a single backslash:
console.log("Hi \ Simoo");

//A safer way to break up a string, is to use string addition:
console.log("Hi" + "Simoo");

/**
Strings Can be Objects
Normally, JavaScript strings are primitive values, created from literals:

var firstName = "John";

But strings can also be defined as objects with the keyword new:

var firstName = new String("John");

*/
var x = "John";              // x is a string
var y = new String("John");  // y is an object
console.log(x);
console.log(y);
console.log(x==y);// is true because x and y have equal values


//But in here, equal strings are not equal, because the === operator expects equality in both type and value.
var x = "John";              // x is a string
var y = new String("John");  // y is an object
console.log(x===y);// is false because x and y are different objects

//Objects cannot be compared:
var x = new String("John");
var y = new String("John");
console.log(x==y);//  is false because x and y are different objects
console.log(x===y);//  is false because x and y are different objects