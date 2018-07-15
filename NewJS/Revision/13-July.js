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


//if statements
var mangoes = "";
var moneyAtHand = 30;
if (moneyAtHand < 100) {
	mangoes ="Can buy 3 mangoes";
} else if (moneyAtHand < 60) {
	mangoes ="Can buy 2 mangoes";
} else if (moneyAtHand <= 30) {
	mangoes = "Can buy 1 mango";
} else {
	mangoes = "Cannot buy mango";
}
console.log(mangoes);

//arrays
var flowers = ["Rose","Jusmin","Tulip"];
console.log(flowers);
console.log(flowers[0]);

flowers[2] = "Araliya";
console.log(flowers[2]);


var studentOne = {firstName:"Sam",marks:73};
var studentTwo = {firstName:"Anne",marks:89};
var studentThree = {firstName:"Paul",marks:67};

var studentMarks = [studentOne,studentTwo,studentThree,studentFour,studentFive,studentSix];
var bestMarks = 0;
for (var x = 0; x <= (studentMarks.length - 1); x++) {
     if(studentMarks[x].marks > bestMarks) {
      bestMarks = studentMarks[x].marks;
   }
}

var letters = ["A","B","C","D"];
for (var c = (letters.length - 1); c >= 0 ; c--) {
	console.log(letters[c]);
}

var num = ["1","2","3","4","5","6","7","8","9","10"];
for (var n = (num.length - 1); n >= 0 ; n--) {
	if ((n % 2) == 0) {
	console.log(num[n]);// reverse value of odd numbers 1 - 10
	}

}

//find the highest marks
var marks = [45,80,35,42,53,90,28,76,87,67];
var maxvalue = 0;
for (i = 0; i <= length; i++) {
	if ((marks[i]) > maxvalue) {
		maxvalue = marks[i];
	}
	
}
console.log(maxvalue);
