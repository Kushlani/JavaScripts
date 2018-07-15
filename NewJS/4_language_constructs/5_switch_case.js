/**
 *
 *
 * Use for multiple conditional statements
 *
 * Format
 * 		switch(expression) {
 * 		
 * 			case "valueA" : {
 * 				//action //This will execute if the expression has value A
 * 				break;
 * 			};
 * 			case "valueB" : {
 * 				//action, if the expression has value B 
 * 				break;
 * 			};
 * 			case "valueC" : {
 * 				//action, if the expression has value C
 * 				break;
 * 			};
 * 			default : {
 * 				//default scnerio, if the expression has some other value , ex D
 * 				break;
 * 			}
 * 		}
 *
 * 
 */


var today = "Sunday";

switch (today) {

	case "Monday" : 
		console.log("Today is monday...");
		break;
	case "Tuesday" : 
		console.log("Today is Tuesday...");
		break;
	case "Friday" : 
		console.log("Today is Friday...");
		break;
	default :
		console.log("Today is Some other day...");
		break;
}


//The same can be done with if statements
if (today == "Monday") {
	console.log("Today is Monday...");
} else if (today == "Tuesday") {
	console.log("Today is Tuesday...");
} else if (today == "Friday") {
	console.log("Today is Friday...");
} else {
	console.log("Today is Some other day...");
}




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


var yearsOfExperience = 10;
var position = "";

switch(yearsOfExperience) {

	case 10 :
		console.log("Secretary");
		break;
	
	case 8 :
		console.log("Additional Secretary");
		break;
	
	case 5 :
		console.log("Assistant Secretary");
		break;
	
	default :
		console.log("Management Assistant");

}