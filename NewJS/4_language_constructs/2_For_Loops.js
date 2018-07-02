/**
 * is used to looped through - iterative execution of a programm code
 * IN LOOPS GIVEN TIME YOU ARE DEALING WITH ONLY ONE ITERATION 
 * for ex : When you are looping through 1 to 10, at a given time you will get the current increment value 
 * but not the whole set of values. you will get values between 1 to 10 ONE AT A TIME.
 *
 * Loops always works with a variable, variable is used to iterate the loop, variable may or may not defined with the loop
 *     it defines
 *         1. associate variable defines the starting position
 *         2. condition mandate/define ending position 
 *         3. increment / step --> Update the associate variable with the new value, 
 *         determine how many times that the loop will run (1 to 10, if the increment is 1 , it will run 10 times
 *         if the increment is 2 it will run 5 times) 
 *
 * for(<starting position>;<codition>;<increment/step>) {
 *   //Whatever inside the loop get executed.
 *   //Code inside the loop can access to the associated variable.
 *   
 * } 
 *
 * access = use  = visible
 * 
 */

for(var i = 0; i < 10; i++) {
  console.log(i); //< -- I am accessing the associated variable of the loop.
}

for(var i = 0; i < 10; i++) {
  console.log("Loops are easy.....!" + i); 
}

/*
for(var i = 0; i < 10; i++) {
  console.log(i); // printed value is 0, then 6,6,6,6...its an infinite one
  i = 5;
}
*/
for(var i = 0; i < 10; i++) {
  console.log(i); 
  i += 2; // i = i + 2
}

for(var i = 0; i < 10; i += 3) {
  console.log(i); 
}


// 1- 10 
var newvar = 0;
for (var x = 1; x<= 10; x++ ) {
     console.log(newvar += 1);// here next value of newvar is 1. so second console.log value is 1 + 1=2
}

//0 -100, 10 - 90 ....
for (var d = 0; d <= 100; d+=10) {
    console.log(d + "-" + (100 - d));
}






/**
 *  HOW TO THINK WHEN YOU HAVE BEEN GIVEN WITH A QUIZ
 *  STEPS
 *    1.) UNDERSTAND WHAT NEED TO BE DONE, WHAT IS REQUIRED TO SOLVE THE ISSUE. (NO PROGRAMMING CONTEXT)
 *    2.) THINK ABOUT WHAT CAN YOU USE FOR THE UNDERSTOOD REQUIREMENTS IN A PROGRAMMING CONTEXT
 *    3.) IMPLEMENT THE SOLUTION
 *
 * For ex: Sum of numbers 1 to 100
 *     1.) I need numbers between 1 to 100 and should count all of them together to get the sum 
 *     2.) I can use a loop. (0 to 100), but loops give me only one value at a time so i should use another variable to keep the sum 
 *     3.) Write the code
 */


var text = "";
for (var x = 1; x <= 10; x++) {
  text+= "*";// tet = "" + "*"
  console.log (text);
}


//factorial of 10
var multiply = 1;
for (y =1; y <= 10; y++) {
  multiply *= y;
  console.log (multiply);
}


//all the factorial values of 1 to 10

for (f =1; f <= 10; f++) {
  var factorial = 1;
    for (g = 1; g <= f; g++) {
       factorial *= g;
       }
 console.log(factorial);
}

//sum of 1 to 10
var sum = 0;
for (var z = 1; z <= 10; z++) {
  sum += z;
  console.log (sum);
}

//values of 1 * 10, 2 *9, 3 * 8...up to 10 * 1
for (var c = 1; c<=10 ; c++) {
  console.log (c * (11 - c));
}


//add array to a for loop
var stars = ["*","**","***","****","*****"];
var num = stars.length;
text = "";
for (i = 0; i < num; i++) {
  text += stars[i];
  console.log (text);

}




/**
 * sum of all the numbers between 300 to 600 which are devided by 2
 *
 *
 * 1). Steps
 *       1.) I need to get the numbers between 300 to 600
 *       2.) we have to divide the numbers between 300 to 600 by two 
 *       3.) if the remainder is 0 then we identify it as an Even number and then we get the sum of those numbers
 * 
 * 2). Steps
 *       1.) I need a loop for that, start 300,end 600, increment by 1
 *       2.) For each number we can use a condition to check the remainder with modulous operator
 *       3.) If the condition is true we add the number to sum variable
 * 
 */

var sum = 0; // number variable 
for (var s = 300; s <= 600; s++) { //Loop starting 300 --> 600 = 301,302 ...600
    sum += s; // sum = sum + s, sum = 0 +300 , sum = 300 + 301
    console.log(sum); // print sum 300,601.....
}


for (var s = 300; s <= 600; s++) { //Loop starting 300 --> 600 = 301,302 ...600
    var sum = 0; // number variable 0
    sum += s; // sum = 0 + 300 ==> 300, 301, ....599
    console.log(sum); //
}


var sum = 0;
for (var s = 300; s <= 600; s++) { 
    var remainder = s % 2;
    if (remainder === 0) {
       sum += s;
    }
    console.log(sum);
}


for (d = 0; d <= 100; d+=5) {
  console.log(d + "-"+ (100-d));

} 


var tot = 0;
for (var h = 2; h <= 10; h++) { 
     if ((h % 2) === 0) {
       tot += h;
    }
    console.log(tot);
}


var rest = 0;
for (var g = 300; g <= 600; g++) { 
     var rest = (g % 5) + (g % 3); // or we can use && operator inbetween (g % 5) && (g % 3)
     if (rest !== 0) {
        console.log(rest+=g);
     }
}
















