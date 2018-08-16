function firstFloor() {
	secondFloor();
	console.log("end of first floor");
}

function secondFloor() {
	thirdFloor();
	console.log("end of second floor");
}

function thirdFloor() {
	forthFloor();
	console.log("end of third floor");
}

function forthFloor() {
	fifthFloor();
	console.log("end of forth floor");
}

function fifthFloor() {
	console.log("start of fifth floor");
	throw "exception in fifth floor"; // With trows it exit the function
	console.log("end of fifth floor");
}


firstFloor();


//What is the output.....