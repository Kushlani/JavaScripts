var x = "";
if ((x*5) < 20) {
	console.log("less than 20");
}

var x = 2;
var msg = ((x*5) < 20) ? "less than 20" : "greater than 20";
console.log(msg);
//OR
console.log((x*5) < 20 ? "less than 20" : "greater than 20");


// if a number is divided by 5 then return the value x *7 else x * 3
var y = 5;
console.log((y % 5)=== 0 ? y * 7 : y *3);

console.log( 10 > 5 ? "I am returning true scenario" : "this is the false scenario");


var z = 4;
var sum = z++; //this equals +=
console.log(sum);
console.log(z);


var sum = ++z; 
console.log(sum);
console.log(z);


var sum = z--; //this equals -=
console.log(sum);
console.log(z);


var sum = --z;
console.log(sum);
console.log(z);

// Assignment operator
var f = 4;
f += 5;// f = f + 5
console.log(f);


//&&
var t = 6;
console.log(t < 9 && t > 5);
