/**
 * Return is used to return a value if the valus is given, 
 * at the same time it will exit from the code context (function).
 *
 * 	return 5; ==> return 5 and exit 
 * 	return; ==> there is nothing given here to return, so it just exit.
 *
 *
 * 	paremeters = are used to pass values to functions
 * 	return = is used to return values from the function.
 *
 *
 * 
 */

function parentFunction() {

	console.log("Just executing the child function..");
	
	var returnedValue = childFunctionOne();
	console.log("Valu returned from the child function is : " + returnedValue);
	
	childFunctionTwo();
	console.log("After child function two..");
	
	childFunctionThree();
	childFunctionFour();
	childFunctionFive();
}


function childFunctionOne() {
	console.log("Child function one....");
	return 10;
}

function childFunctionTwo() {
	console.log("Child function two");
	return 10;
	console.log("I m not going to get executed because of the above return statement....");
}

function childFunctionThree() {
	console.log("Child function three");
	return;
}

function childFunctionFour() {
	console.log("Child function four");
	var x = 10;
	if (x > 8) {
		console.log("X is greater than 8");
		return; //here i am exiting from the function 
		console.log("X is also greater than 7");
	}
	console.log("End of the child function four");
}

function childFunctionFive() {
	console.log("Child function five");
	console.log("Loop.....");
	for (var x = 0;x<10;x++) {
		if (x == 7) {
			return;
		}
		console.log(x);
	}
}


parentFunction();