/**
 * Author : Kushlani
 * Date : Day 3
 */
function cookSomeLunch() {

	console.log("I am going to cook some lunch for you....");

	cutVegitables("Onions");
	cutVegitables("Green Chillies");
	cutVegitables("Kale");
	cutVegitables("Carrots");

	cookVegis();

	cutVegitables("Onions");
	cutVegitables("GreenChillies");
	cutVegitables("Carrots");

	mixSalad();

	console.log("Lunch is ready....");
}

/**
 * This could be considered as a module, (So does the other cutting vegi functions)
 * Modules purpose is to share the same functionality WITHIN in the programms.
 */
function cutVegitables(v) {
	console.log("I am cutting " + v);
	console.log("Finished cuttring " + v);
}

function cookVegis () {
	console.log("I am cooking vegis now");
	console.log("Cooking is finished");
}

function mixSalad() {
	console.log("I am mixing salad");
	console.log("Salad mixing is finished");
}

cookSomeLunch();
