/**
 * There is no class concept in java script..
 * In other PL classes are used to create objects and classes are nothing but templates(blueprints) for objects
 */

//following is a valid object ceation
var studentObj = {
	name: "Student name",
	address: "Student address",
	age: 55
};
//However it is hard to create more objects like this, it is easier if there is a way to create objects quickly 
//we use classes in other PLs for that in in JS we use object constuctor functions


/**
 * Format
 *
 * 	arguments <-- more like parameters we define with the object constuctor
 * 	arguemtns are values we pass
 *
 *
 * 	function functionName(contructor arguments....) {
 * 		this.propertyName = argument;
 * 	}
 *
 * When you call this function with new keywords this will return an object back
 * This is called object creation.
 *
 * THIS KEYWORD INDICATES THAT IS BELONGS TO THAT OBJET.
 *
 * OBJECT CONSTUCTORS ARE FOCUSED ON OBJECT CREATION, WHATEVER YOU PUT INSIDE THE OBJECT CONSTRUCTORS WILL BE A PART OF ALL THE OBJECTS
 * WHICH ARE CREATED BY IT.
 *
 * 
 */

function Student(firstNameArgument,lastNameArgument,addressArgument) {
	this.firstNameProperty = firstNameArgument;
	this.lastNameProperty = lastNameArgument;
	this.addressProperty = addressArgument;

	//This function would be available to everyone
	this.myTestMethod = function(parameter) {
		console.log("I am inside my test method " + parameter);
	};
};

var stuOne = new Student("Kushlani","Aluthge","Sydney");
console.log(stuOne.firstNameProperty);
console.log(stuOne.lastNameProperty);
console.log(stuOne.addressProperty);

var stuTwo = new Student("Kushlani");
console.log(stuTwo.firstNameProperty);
console.log(stuTwo.lastNameProperty);
console.log(stuTwo.addressProperty);


//These properties and methods are spcific to obj2 only
stuTwo.myNewProperty = "This is my stupid property value";
console.log(stuTwo.myNewProperty);
stuTwo.myTestMethod("************");

stuTwo.myOwnFunctionSpecificToMe = function(specific) {
	console.log("This is a function specific to me only " + this.firstNameProperty + " " + specific);
};


stuTwo.myOwnFunctionSpecificToMe("<<>>>");




