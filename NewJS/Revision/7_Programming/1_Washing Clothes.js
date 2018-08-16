//Proceedure of washing clothes

function washClothes() {

console.log("Start to wash clothes");

addClothes();
addLaundryLiquid(50);
setTimer(20);
startButton();
takeOutClothes();

console.log("Here we go....Clothes are washed and they are smelling good!!!");

}


function addClothes() {
	var clothesArray = ["Tops","Trousers","Undies","Frocks","Socks"];
	for (var x = 0; x < clothesArray.length;x++) {
		console.log("Add " + clothesArray[x] + " to the washing machine");
	}
}

function addLaundryLiquid(y) {
	console.log("Add Tyde laundry liquid " + y + " ml");
}

function setTimer(z) {
	console.log("Set timer to " + z + "mnts");
}

function startButton() {
	console.log("Turn on the start button");
}

function takeOutClothes() {
	console.log("Take out the clothes after finishing the washing proceedure");
}


washClothes();