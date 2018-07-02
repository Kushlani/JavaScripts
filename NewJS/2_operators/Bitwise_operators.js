/**
 * Bitwise operators are operated on binary level.
 * We use binary values to represent data in the copmuter as binary indicates off and on electric current positions.
 * In order to understand bitwise operators, first we have to calculate binary values.
 * Binary values = 0 and 1, so we have to divided by two
 * Ex : 29 =  1 
 *
 *  Operator		Name	Description
		&			AND		Sets each bit to 1 if both bits are 1
		|			OR		Sets each bit to 1 if one of two bits is 1
		^			XOR		Sets each bit to 1 if only one of two bits is 1
		~			NOT		Inverts all the bits
 */

// & AND 

var x = 5 & 2; 
console.log(x);// decimal value is 0
/*
5 => 101 , 2 => 10
101
010
----
000

 */

// | OR

var y = 5 | 2; 
console.log(y);// decimal value is 7
/*
5 => 101 , 2 => 10
101
010
----
111

 */


// ^ XOR 
var z = 5 ^ 2; 
console.log(z);// decimal value is 7
/*
5 => 101 , 2 => 10
101
010
----
111

 */


// ~ NOT <- opposit value, 0 --> 1 , 1 --> 0, true --> false, false --> true

var a = ~5; 
console.log(a);// decimal value is -6
/*
5 => 101 , 2 => 10
101
010
----
111

 */

var aa = true;
console.log(~aa);// decimal value is -2


/**
 *
 *true --> 1
 *false --> 0
 * 
 */

var aa = true;
var bb = false;
console.log(aa & bb); // 0
console.log(aa | bb); // 1