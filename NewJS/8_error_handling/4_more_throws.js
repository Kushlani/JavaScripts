function parentFunction() {
	//An exception is returining from this function call (the exception throws to the parent function,
	//because its the one who called the childFunction)
	childFunction();
}
function childFunction() {
	//I am throwing an exception from this function
	throw "Throwing an exception.....";
}

parentFunction();




