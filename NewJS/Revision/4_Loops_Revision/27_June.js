var value ="";
for (var x = 27; x < 2;) {
	if ((x % 2) === 0) {
	 x = x / 2;
	 value += 0;
	} else { 
		x = x % 2;
		value +=1;
	}
 }
  console.log(value);



var i = 99;
while (i > 0)
{
    console.log(i + " bottles of beer on the wall");
    i -= 1;
}


for(i=0; i<10; i++) { 
    console.log(i);
    i++;
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
var length = marks.length;
var maxvalue = 0;
for (i = 0; i <= length; i++) {
	if ((marks[i]) > maxvalue) {
		maxvalue = marks[i];
	}
	
}
console.log(maxvalue);

/*
//find the lowest marks
var marks = [45,80,35,42,53,90,28,76,87,67];
var length = marks.length;
var minvalue = 0;
for (i = 0; i <= marks.length; i++) {
	if ((marks[i]) ... minvalue) {
		minvalue = marks[i];
	}
	
}
console.log(minvalue);*/

console.log("This is  a new demo ");

var number = 6;
while(number > 0) {
	number-=3;
	console.log(number);
}