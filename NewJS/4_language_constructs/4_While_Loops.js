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


