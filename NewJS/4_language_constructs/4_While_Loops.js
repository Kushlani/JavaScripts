/**
 *
 *	Format
 *	
 *		There are two variations of this loop
 *
 * 		1.) While Loop
 *
 *	 		while(condition) { <--If the condition is true this will be executed.
 * 	  			//statements to be executed
 * 		    }
 *
 * 			the loop will stop when the condition is false....
 *
 *		2.) Do while loop
 * 		
 * 	 		do {
 * 		  		//Statements to be executed
 * 			} while (condition);
 *
 *			Do part will run at least once, even when the condition is false. 
 *
 *  TODO: Data type conversions and loop
 *
 * 
 * 
 *
 *
 * 
 */


//Following loop is a infinite loop
//while (true) {} 

var isTodayRaning  = true;
while(isTodayRaning) {
	console.log("Today is raning .......");
	isTodayRaning = false;
}

//How to Print nubers 1 to 10
var count = 1;
while (count <= 10) {
	console.log(count);
	count += 1;
}

//Do while loop demo

do {
	console.log("Do section will run once even the condition is false.....");
} while( 5 > 10);


//To Print Value 0 to 10..
var doCount = 0; 
do {
	console.log(doCount)
	doCount++;
} while( doCount < 10);


/**
 * Factorial 
 */

var factorialNumbers = 1;
while(factorialNumbers <= 10) {

	var multiplicationsCout = 1;
	var count = 1;
	while (count <= factorialNumbers) {
		multiplicationsCout *= count;
		count++;
	}


	console.log(factorialNumbers + " factorial is : " + multiplicationsCout);

	factorialNumbers++;
}

//Power of 4 from 1 to 10

var start = 1;
while (start <= 10) {

    var sum = 1;
    var inner = 1;
    while (inner <= 4) {
        sum *= start;
        inner++;
    }
    console.log(sum);

    start++;
}

//binary value of 27
var value = 27;
var binary = "";
while (value > 0) {

    if ((value % 2) == 0) {
        value /= 2;
        binary += 0;
    } else {
        value = (value - 1) / 2;
        binary += 1;
    }
}
console.log(binary);


// display 1 to 10 even numbers

var num = 1;
while (num <= 10) {

    console.log(num % 2 == 0 ? "Even num" + num : "Odd num" + num);
    num++;
}

//sum of all the numbers between 300 to 600 which are devided by 2
var buck = 0;
var num = 300;
while (num <= 600) {
    if ((num % 2) == 0) {
        buck += num;
    }
    num++;
}
  console.log(buck);

//sum of all the numbers between 300 to 600 which are devided by 3 and 5
var total = 0;
var to ="";
var val = 300;
while (val <= 600) {

    if ((val % 3) + (val % 5) == 0) {
        total += val;
        to+=val+",";
    }
   
    val++;
}
  console.log(to);
  console.log(total);


//Perefect numbers between 1 - 1000

var number = 1;
while (number <= 1000) {

    var bucket = 0;
    var perfect = 1;
    while (perfect <= number / 2) {
        if ((number % perfect)==0) {
            bucket += perfect;
           }
      perfect++;
    }
    if (bucket == number) {
        console.log("perfect num :" + number);
    }
    number++;
}

