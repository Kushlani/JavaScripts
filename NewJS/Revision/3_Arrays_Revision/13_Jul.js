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



var flowers = ["Rose","Jusmin","Tulip"];
console.log(flowers);
console.log(flowers[0]);

flowers[2] = "Araliya";
console.log(flowers[2]);
