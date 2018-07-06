for (var i = 0; i < 15; i++) {
    i = i + (i % 2);
    console.log(i);
    i = i + 2;
}


/**
 * 	Memory			|	Output
 *   0					 0
 *   2					 4
 *   3					 8
 *   6					 12
 *   7
 *   8
 *   10
 *   11
 *   14
 *   15
 *   
 * 
 */

console.log("Factorial......");
// Factorial Calculation 1 to 10
for (var f = 1; f <= 10; f++) {
    var sum = 1;
    for (g = 1; g <= f; g++) { // 5 -> 1*2*3*4*5
        sum = sum * g;
    }
    console.log(f + " factorial : " + sum);
}


/*
 * 	   Memory    		|	Output
 *
 *  f  |  sum |  g            1
 *  1      1     1            2
 *  2      2     2            6
 *  3      6     3           24 
 *  4     24     4          120 
 *  5    120     5
 *              
 *
 *
 *
 *
 *
 */

//Write a program to calculate power of 4 for all the number between 1 to 10
for (var a = 1; a <= 10; a++) {
    var sumnew = 1;
    for (b = 1; b <= 4; b++) { // 5*5*5*5
        sumnew *= a;
    }
    console.log(a + " : " + sumnew);
}

var count = 1;
for (var a = 100; a < 200; a += 10) { //condition value = increment(+) * no of iterations 
    var sumnew = 1;

    for (b = 1; b <= 4; b++) { // 5*5*5*5
        sumnew *= count;
    }
    console.log(a + " : " + sumnew);
    count++;
}


/**
 * values between 1 to 10
 * you have to see this as
 * an action which should be performed 10 times
 *
 * both of the below loops run 10 times
 * 
 */
for (var a = 1; a < 10; a += 1) {
    console.log(a); //here i am displaying a value 
}

//See the repetition, we can get the count anyway even without accessing the associated variable
var count = 1;
for (var a = 100; a < 1000; a += 100) {
    console.log(count); //here i am displaying a value 
    count++;
}

/**
 * Disply 1 to 10 even numbers
 */

for (var i = 1; i < 10; i++) {
    var s = i % 2;
    if (s === 0) {
        console.log("Even num :" + i);
    }
}


for (var i = 1; i < 10; i++) {
    var s = i % 2;
    console.log((i % 2) == 0 ? "Even num :" + i : "Odd num :" + i);
}

//how to put brackets
var someVariable = 5 + (2 * 4); // 5 + 8 


for (var i = 0; i < 10; i += 2) {
    console.log(i !== 0 ? "Even num :" + i : "");
}


var count = 1;
for (var i = 100; i < 200; i += 10) {
    var s = count % 2;
    if (s === 0) {
        console.log("Even num :" + count);
    }
    count += 1;
}

/**
 *Memory
 *
 * count --> 4
 * i --> 120
 * s --> 1
 * 
 *
 *
 * Output
 *  2
 */




/**
 * write a programm to get  the sum of power 3 and 5 for each number between 25 to 50. 
 *
 * repetition - 25 - 50 --> loop start 25, end 50, increment 1
 * for each number 
 * 		power 3 - three time of that number - repition 3 ---> loop start 1, end 3 increment 1
 * 		we need another variable to keep the total multiplication
 *
 *		power 5 - five times of that number - repition 5 --> loop start 10, end 15, increment 1 
 *		(it doesnt matter from where we start as far as if we dont access that associated variable of the loop) 
 * 		we need another variable to keep the total multiplication
 *


// Display the binary value of 27


 
var tl = "";
for (ooooooo) {

	var remainder = x % 2; 
	tl+= remainder;
	console.log(tl);

} 
*/

var value = "";
for (var x = 27; x > 0;) {
    if ((x % 2) === 0) {
        x = x / 2;
        value += 0;
    } else {
        x = (x - 1) / 2;
        value += 1;
    }
}
console.log(value.split("").reverse().join(""));



// Display the binary value of 53

var total = "";
for (var b = 53; b > 0;) {
    if ((b % 2) == 0) {
        b = b / 2;
        total += 0;
    } else {
        b = (b - 1) / 2;
        total += 1;
    }
    console.log(total);

}

var newv = 27;
var buk = "";
for (var x = 0; x < 5; x++) {
    if ((newv % 2) == 0) {
        newv = newv / 2;
        buk += 0;
    } else {
        newv = (newv - 1) / 2;
        buk += 1;
    }
}
console.log(buk);




var display = "";
var div = "";
var sum = "";
var value = 6;
for (var b = 1; b <= (value / 2); b++) {
    if ((value % b) == 0) {
        sum = b;
        div = value / b;
        display += "(" + sum + "*" + div + ")";
    }
}
    console.log(display);




//Perfect numbers between 1 – 1000
for (var k = 1; k <= 1000; k++) {

    var sum = 0;
    for (var l = 1; l <= (k / 2); l++) {
        if ((k % l) === 0) {
            sum += l;
        }
    }
    if (sum == k) {
        console.log("Perfect Number :" + k);
    } 

}


/*
   for (x = 1; x <= 1000; x++) {
       var total = 0;
       var limit = x;
       if ((x % 2) == 0) {
           limit = x / 2;
       } else {
           limit = (x - 1) / 2;
       }

       for (y = 1; y <= limit; y++) {

           if ((x % y) == 0) {
               total += y;
           }
       }

       if (total == x) {
           console.log("Perfect number: " + x);
       }
   }


*/

console.log("***************");

var binary = "";
var value = 27;
for (x = 1; x < 100; x++) {

	if(value>=1) {
		if ((value % 2) == 0) {
	        value = value / 2;
	        binary += 0;
	    } else {
	        value = (value - 1) / 2;
	        binary += 1;
	    }
	} 
}
console.log(binary.split("").reverse().join(""));


for (var a = 1; a <= 100; a++) {
    var multi = 1;
    for (b = 1; b <= a; b++) {
        multi *= b;
    }

    var sum = 0;
    for (var c = 1; c <= (a / 2); c++) {
        if ((a % c) === 0) {
            sum += c;
        }
    }
    if (sum == a) {
        console.log("Perfect Number :" + a);
    }

    console.log(a + " factorial : " + multi);

}


console.log("Binary Test..." + 27 / 2);

var decimalNumber = 27;
var collector = "";

for (var i = 0; i < 100; i++) {

    if (decimalNumber > 0) {

        if (decimalNumber % 2 == 0) {
            decimalNumber = decimalNumber / 2;
            collector += 0;
        } else if (decimalNumber > 1) {
            decimalNumber = (decimalNumber - 1) / 2;
            collector += 1;
        } else {
            collector += 1;
            decimalNumber = 0;
        }
    }
}
console.log(collector);