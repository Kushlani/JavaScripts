function firstFloor() {
	console.log("start of first floor");
	try {
		secondFloor();
	} catch(e) {
		console.log("Inside first floor catch....");
	}
	console.log("end of first floor");
}

function secondFloor() {
	console.log("start of second floor");
	try {
		thirdFloor();
	} catch(e) {
		console.log("Inside second floor catch");
		throw "throwing from second floor...";
	}
	console.log("end of second floor");
}

function thirdFloor() {
	console.log("start of third floor");
	try {
		forthFloor();
	} catch(e) {
		console.log("inside thrid floor catch");
		throw "throwing from third floor.....";
	}
	console.log("end of third floor");
}

function forthFloor() {
	console.log("end of forth floor");
	try {
		fifthFloor();
		
	} catch(e) {
		console.log("Inside forth floor catch...");
		throw "throwing from forth floor...."
	}
	console.log("end of forth floor");
}

function fifthFloor() {
	console.log("start of fifth floor");
	throw "exception in fifth floor"; // With trows it exit the function
	console.log("end of fifth floor");
}


firstFloor();

/*console.log("start of first floor");
console.log("start of second floor");
console.log("start of third floor");
console.log("end of forth floor");
console.log("start of fifth floor");
console.log("Inside forth floor catch...");
console.log("inside thrid floor catch");
console.log("Inside second floor catch");
console.log("Inside first floor catch....");
console.log("end of first floor");
*/