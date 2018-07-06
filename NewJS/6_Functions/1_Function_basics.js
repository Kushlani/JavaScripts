/**
 * Function is a grouping of a block of codes
 *
 * format 
 *
 * function functionName(parameters) {
 * 		return vale //Return value is not mandatory, it is optional
 * }
 *
 * calling a function is also called a function invocation
 * functionName(parameters)
 */

function thisIsATestFunction(paramOne) {
	return "This is my test function with " + paramOne;
}

//Here i am capturing the return value, and also passing a value to the function
var returnValue = thisIsATestFunction("Kushlani..");
console.log(returnValue);

//Passing values are not mandatory 
var anotherReturnValue = thisIsATestFunction(); // here i am not passing any value
console.log(anotherReturnValue);

/**
 * Passing values to parameters are not manatory, eventhough this is not possible to do in JAVA
 */
function passingValueToParamDemo(a,b,c) {
	return "This got passed to me A " + a + " B " + b + " C " + c;
}

console.log(passingValueToParamDemo(10,20,30));
console.log(passingValueToParamDemo(10,20));
console.log(passingValueToParamDemo(10));
console.log(passingValueToParamDemo());


/**
 * FUNCTIONS ARE OBJECTS IN JS
 */

//because functions are objects you can assign them to variables

//Here I am assign a functiion to a variable
var myFunctionVariable = function sayMyName(name) {
	return "Hello " + name;
};

//Here we use variable name to call the function not the actual function name
var returnedValueFromSayMyName = myFunctionVariable("Kushlani");
console.log(returnedValueFromSayMyName);


/**
 * Since when you assign a function to a variable the function name can not be used to invoke (call) the function
 * we dont put the function name when we assign them to variables. 
 *
 * THIS IS ALSO CALLED ANNONYMOUS FUNCTIIONS ( SINCE THERE IS NO NAME)
 * THIS IS ALSO CALLED FUNCTION EXPRPESSIONS
 */

var thisIsAFunctionExpression = function(x,y) {
	return "X is : " + x + " Y is : " + y;
 };

//Calling the function expression
console.log(thisIsAFunctionExpression(10,20));

/**
 * Since Function is a Object in JS functions can be passed to another function
 * This is a main feature of functional programming. (Functional programming is a programming pradigm)
 * Java doesnt exactly support this.
 * 
 */

function multiplyByTen(f) {
	return f * 10
};

var sumNumbers = function(x,y) {
	return x + y;
}

//Here I am passing multiplyByTen to another function
var returnFromFunctionsPassingToAnother = multiplyByTen(sumNumbers(5,3));
console.log(returnFromFunctionsPassingToAnother);


var powerOfTwo = function(x) {

	var sum = 1;
	for ( var i = 1; i < x ; i++) {
		sum *= 2; 
	}
	return sum;
};

var multiplyByFive = function(y) {
	return y * 5;
};

console.log(multiplyByTen(powerOfTwo(4)));

/**
 * Functions can also be created with builtin functions constructor
 * This is not common in JS
 */

var sumOfTwoValue = new Function("x","y","return x+y");
console.log(sumOfTwoValue(10,20));


/**
 * YOU CAN SELF INVOKE A FUNCTIONS
 *
 * 	( function() {} )();
 *
 * 
 **/

 (function () {
 	console.log("Test Function which get self invoked.....");
 })();
 
