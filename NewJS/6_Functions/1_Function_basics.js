/**
 * A JavaScript function is a block of code designed to perform a particular task.
 * A JavaScript function is executed when "something" invokes it (calls it).
 * JavaScript functions are defined with the function keyword.
 * You can use a function declaration or a function expression.
 *
 * Why Functions?
	You can reuse code: Define the code once, and use it many times.

	You can use the same code many times with different arguments, to produce different results.


Function Declarations :
    Functions are declared with the following syntax:

	function functionName(parameters) {
  	code to be executed
	}
Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

	function myFunction(a, b) {
    return a * b;
	}

Function Expressions
	A JavaScript function can also be defined using an expression.
	A function expression can be stored in a variable:

	var x = function (a, b) {return a * b};


After a function expression has been stored in a variable, the variable can be used as a function:

Ex:
	var x = function (a, b) {return a * b};
	var z = x(4, 3);

The function above is actually an anonymous function (a function without a name).
Functions stored in variables do not need function names. They are always invoked (called) using the variable name.
*/
