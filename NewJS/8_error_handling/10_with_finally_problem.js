function cookingPasta() {
	
	console.log("Inside try catch demo......");

	try {
		boilingPasta();

	} catch(error) {
		console.log(error);

		putThePastaInFirdge();
	}

	cleanTheKitchen();//This is a must

	console.log("Some code ......");
	console.log("Try catch demo is finished");
}


function boilingPasta() {
	console.log("Inside the boilingPasta......");
	throw "No more gas......";
}

function cleanTheKichen() {
	console.log("I am cleaning the kichen...");
}

function putThePastaInFirdge() {
	console.log("I am putting pasta in fridge.....");

	throw "I want go to bathroom....";
}

cookingPasta();