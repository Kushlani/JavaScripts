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


 var moneyAtHand = 30;
if (moneyAtHand < 100) {
	console.log("Can buy 3 mangoes");
} else if (moneyAtHand < 60) {
	console.log("Can buy 2 mangoes");
} else if (moneyAtHand <= 30) {
	console.log("Can buy 1 mango");
} else {
	moneyAtHand = "Cannot buy mango";
}

