function parentFunction() {
	try {
		//Since I know there is a possibility of coming an exception out of this function i am caching (handline) the exception
		childFunction();
	} catch(ex) {
		//I am displaying what i have received here...
		console.log(ex);
		throw "I am throwing from the parent level..... ( " + ex  + " )";
	}
}

function childFunction() {
	//I am not handling (catching) the exception
	throw "Throwing an exception from child.....";
}

//Eventually the exception comes here...
parentFunction();