//Arithmatic Operators
var d = 6;
var sum = d++; //this equals +=
console.log(sum);//7
console.log(d);//7


var sum = ++d; 
console.log(sum);//7
console.log(d);//8


var sum = d--; //this equals -=
console.log(sum);//7
console.log(d);//7


var sum = --d;
console.log(sum);//7
console.log(d);//6


// Assignment operators
var f = 4;
f += 5;// f = f + 5
console.log(f);//9

var f = 6;
f -= 5;// f = f - 5
console.log(f);//1

//Bitwise operators
var AND = 4 & 2;
console.log(AND);// decimal value = 0

var OR = 3 & 4;
console.log(OR);//decimal value = 7

var XOR = 2 & 4;
console.log(XOR);//decimal value = 1

//Comparison Operators
var x = 6;
console.log (x==6);//true

var y = 6;
var c = 6;
var s = y + c;
console.log (s);//true

var z = 8;
console.log (z!=8);//false
console.log (z!=7);//true

var a = "6";
console.log (a!=="8");//true

var b = 8;
console.log (b > 6);//true

var c = 8;
console.log (c < 6);//false

var d = 8;
console.log (d >= 6);//false

var e = 6;
console.log (e <= 6);//true

//Logical Operators
//&&
var t = 6;
console.log(t < 9 && t > 5);//true

//!
var p = 6;
console.log(!(p < 9 || p > 5));//false

//Conditional operators
var fruitPrice = 10;
var PriceAtHand = 12;
console.log(fruitPrice <= PriceAtHand ? "Can buy" : "Cannot buy");


