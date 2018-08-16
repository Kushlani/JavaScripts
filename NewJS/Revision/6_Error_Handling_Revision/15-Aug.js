function goToDestination() {
	
	console.log("Start of the go to destination fucntion");

	try {
		goByTrain();

	} catch (ex) {
		console.log("the goByTrain() function call has not been successful");
		
		try {
			goByWalking();

		} catch(ex) {
			console.log("It seems like error in go by walking as well");
			throw "Can not proceed with the function.............";
		}
	}
}

function goByTrain() {
	throw "I cant go by train.....";

}

function goByWalking() {
	throw "I cant go by walking.....";
}

goToDestination();

