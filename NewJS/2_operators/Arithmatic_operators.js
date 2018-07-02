/**
 * Arithmetic operators are used to perform arithmetic on numbers
 *
 * 	Operator	Description
		+		Addition
		-		Subtraction
		*		Multiplication
		/		Division
		%		Modulus (Division Remainder)
		++		Increment
		--		Decrement

 */



// + Addition
var x = 1;
var y = 2;
var z = x + y;
console.log (z);

// - Substraction
var a = 6;
var b = 2;
var c = a - b;
console.log (c);

// * Multiplication
var d = 5;
var e = 2;
var f = d * e;
console.log (f);

// / Division
var g = 6;
var h = 2;
var i = g / h;
console.log (i);


// % (Modulous) Remainder
var j = 7;
var k = 2;
var l = j % k;
console.log (l);

// ++ increment by one
var m = 4;
m++;
console.log (m); 

var m = 4; 
++m;
console.log (m);

/**
 * There is a special case assoiated with this operator as the side of the operator makes a significant difference when assigning values.
 * For eg: x = ++y; here x will get the updated y value which is y + 1. 
 * When you put y++ always x will get the same value of y. But y wil become y + 1 after the assignment.
 *
 * x++ after the variable --> fisrt assign the current value to result, increase the variable value by one
 * ++x Before the variable --> first update the variable, assign the updated value to resutl
 * 
 */
var x = 5;
var result = x++;
console.log ("x :" + x); // x value 6
console.log ("result :" + result); // result is 5

result = ++x;
console.log ("x :" + x); // x value 7
console.log ("result :" + result); // result is 7


// -- decrement by one

var n = 5;
var result = n--;
console.log ("n :" + n); // n value 4
console.log ("result :" + result); // result is 5

result = --n;
console.log ("n :" + n); // n value 3
console.log ("result :" + result); // result is 3
