function parentFunction() {
	childFuntion();
	console.log("I am now inside the parent function.......")
}
function childFunction() {

	try{
		anotherFunction();
		console.log("finished another function call.....");
		return;
	} catch(x) {
		console.log(x);
	} finally {
		console.log("Inside funally block........")
	}
}

function anotherFunction() {
	console.log("I am ok no exception......")
}

parentFunction();

