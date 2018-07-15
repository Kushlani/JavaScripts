/**
 * if else statements / conditional statements
 * format:
 * 
 * if(condition) {
 * 		//True scnerio get executed
 * } else {
 * 		//False scnerio get executed
 * }
 *
 * else clause is optional
 */


if (10 > 20) {
	console.log("10 > 20");
} else {
	console.log("10 < 20"); 
}

var isTodayARainingDay = true;
if(isTodayARainingDay) {
	console.log("Today is raining.....");
} else {
	console.log("Today is not raining.....");
}


//There is no else, but that is fine as it is optional
var totalScore = 450;
if(totalScore < 460) {
	console.log("Sri Lanka can win the match...");
}


/**
 *
 * you can nest this with many if else conditions
 * there are many conditions 
 * ConditionA > ConditionB > ConditionC > Else 
 *
 * if (conditionA) {
 * 		//true scnerio A
 * } else if (conditionB) {
 * 		// it will come here only if the condition A was not successful
 * } else if (conditionC) {
 * } else {
 * 		
 * }
 */

var marks = 182;
var selectedSchool = "";

if (marks > 185) {
	selectedSchool = "Royal College";
} else if (marks > 180) {
	selectedSchool = "Ananda College";
} else  if (marks > 175) {
	selectedSchool = "DBV";
} else {
	selectedSchool = "You havent selected to any good school...";
}

console.log(selectedSchool);

/**
 * Homework :
 * Categorise employees based on the no of years of exprience --> gov sl position
 */

var yearsOfExperience = 10;
var position = "";

if (yearsOfExperience > 10) {
	position = "Scretary";
} else if (yearsOfExperience > 8) {
	position = "Additional Secretary";
} else if (yearsOfExperience > 5) {
	position = "Assistant Secretary";
} else {
	position = "Management Assistant";
} 
 
console.log(position);