function withErrorHandling() {
	try {
		var num = 1;
		num.toPrecision(500);   // This is a Range Error....
	}
	catch(ex) {
		console.log("**** I am inside the catch block, I am catching the error")
		console.log(ex);
		console.log(ex.name);
		console.log("**** End of the catch block")
	}
}

withErrorHandling();



