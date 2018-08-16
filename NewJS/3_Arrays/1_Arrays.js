/**
 * An array is a special variable, which can hold more than one value at a time.
   An array can hold many values under a single name, and you can access the values by referring to an index number.

   Format :
   var array_name = ["item1", "item2", ...];       

   JS Arrays are dynamic <-- Can hold different types of data in its elements
   This is not the case with strict type languages
   var arrr = [true,23,"string val",7.3433];
   Java --> int age = 30; <-- int is a number type in java
   			String testString = "ABCD";
   			String [] myTestArray = {"A","B","C"};

 */


//Full Array :with JavaScript, the full array can be accessed by referring to the array name:
var fruits = ["Banana","Apple","Mango"];
console.log(fruits); 

// or you can write it like below

var fruits = [
		"Banana",
		"Apple",
		"Mango"
];
console.log(fruits);


//Access the Elements of an Array : You can refer to an array element by referring to the index number.
var fruits = ["Banana","Apple","Mango"];
console.log(fruits[2]); 
console.log(fruits[0]); 

fruits[1] = "Orange";
console.log(fruits);


//Adding objects to array

var studentOne = {firstName:"Sam",marks:65};
var studentTwo = {firstName:"Anne",marks:42};
var studentThree = {firstName:"Paul",marks:87};
var studentFour = {firstName:"George",marks:55};
var studentFive = {firstName:"Luara",marks:73};
var studentSix = {firstName:"Alex",marks:92};

var studentMarks = [studentOne,studentTwo,studentThree,studentFour,studentFive,studentSix];
var bestMarks = 0;
for (var x = 0; x <= (studentMarks.length - 1); x++) {
     if(studentMarks[x].marks > bestMarks) {
      bestMarks = studentMarks[x].marks;
   }
}

console.log(bestMarks);


var z = [];
for (x = 1; x <= 10; x++) {
    z.push(x); //z[z.length] = (x);
 }
   console.log(z);



/*
var z = [{student}];
for (var x = 0; x <= (100 -1); x++) {
    z.push();

    var student = {firstName:"Paul",marks:0};
for (var y = 0; y <= 100; y++) {
    console.log(student.marks + y);
 }
 }
   console.log(z);
   */

//Max value
var points = [40,90, 1, 5, 25, 10];


function myArrayMax(arr) {
    var len = arr.length;
    var max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
}
console.log(myArrayMax(points));

//Or Max.math.apply
var points = [40, 100, 1, 5, 25, 10];

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}
console.log(myArrayMax(points));



//Min value
var points = [40, 100, 3, 5, 25, 10];

function myArrayMin(arr) {
    var len = arr.length;
    var min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
}
console.log(myArrayMin(points));

//Or Min.math.apply
var points = [40, 100, 1, 5, 25, 10];

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}
console.log(myArrayMin(points));


///////////////////////////////////////////////////////////////////
var studentOne = [
                {firstName:"Sam",marks:65}, 
                {firstName:"Anne",marks:42},
                {firstName:"Paul",marks:87},
                {firstName:"George",marks:55},
                {firstName:"Luara",marks:73},
                {firstName:"Alex",marks:92}
];

studentOne.sort(function(a, b){
  return a.marks - b.marks}
  );
console.log(studentOne);