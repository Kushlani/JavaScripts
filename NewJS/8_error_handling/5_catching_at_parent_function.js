function parentFunction() {
	try {
		//Since I know there is a possibility of coming an exception out of this function i am caching 
		//(handline) the exception
		childFunction();
	} catch(ex) {
		console.log("Exception occurred....");
		console.log(ex);
	}
}

function childFunction() {
	throw "Throwing an exception.....";
}

parentFunction();