function goToDestination() {
	
	console.log("Inside the go to destination fucntion.......");

	try {
		console.log("I am trying to go by train.....");
		goByTrain();

	} catch (ex) {

		console.log("If I am inside catch means the goByTrain() function call has not been successful.....");
		//So I have to try go by walking...
		try {
			goByWalking();
		} catch(ex) {
			console.log("It seems like error in go by walking as well.....");
			throw "Can not proceed with the function.............";
		}
	}
}


function goByWalking() {
	console.log("I am going by walking......");
	throw "I cant go by walking.....";
}

function goByTrain() {
	console.log("I am going by train......");
	throw "I cant go by train.....";
}



goToDestination();


//First try to go by train, if not succeeded you have to go by walking 
//if you cant do that you should stop trying that
