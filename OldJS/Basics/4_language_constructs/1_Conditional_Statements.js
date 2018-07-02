/**
 * Check a condition, if else scnerio
 * if it rains i will bring an unbrella, otherwise i will bring a cap <-- Here we check whether something is true or false in the condition  
 * raning = true --> bring umbrella, else --> cap
 *
 * if(condition) {
 * 		//true scnerio
 * } 
 * else {
 * 		//false scnerio, This is not mandatory...
 * }
 *
 * These are commonly called if else statements
 * 
 */

var raning = true;

if (raning) {
	console.log("Bring an umbrella");
} else {
	console.log("Bring a cap..");
}

/**
 * with boolean values
 */

if(5 > 8) {
	console.log("A");
} else {
	console.log("B");
}

//since else is optional
if(raning) {
	console.log("Dont go to office its taining....");
}


/**
 * We can defined multiple if else statements with nested if elses.
 *
 * 		if (condition) {
 * 		
 * 		} else if (conditon) {
 * 		
 * 		} else if (condition) {
 * 		
 * 		} else {
 * 		
 * 		} 
 * 
 */

// We can have nested if else 

var testValue = 8;

if (testValue > 20) {
	console.log(" > 20");
} else if (testValue > 15) {
	console.log(" > 15");
} else if (testValue > 10) {
	console.log(" > 10");
} else {
	console.log(" > 0");
}




