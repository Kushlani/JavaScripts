/**
 * There is no class concept in java script..
 * In other Programming Languages classes are used to create objects and classes are nothing but templates(blueprints) for objects
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
 * Very important
 *
 * OBJECT PROPS ARE ACCESSSED WITH DOT NOTATION (AND WITH ARRAY STYLE ALSO)
 * FORMAT > 	objectReferenceVariable.property
 * But if the access of the object properties witin the object itself (if we access the properties within the object constructor)
 * 			    this.property (here this means this instance/this object (what ever the object which get created from the constructor.))
 *
 * 				Function Constructor is like the Class
 * 				Objects created from the constructor are like object instances. (instances == object)
 * 
 * Whenever the JS engine sees there is "this" keyword it creates a property in the object. It doesnt matter how the value comes.
 * This = Current object which the execution is happening
 *  
 *
 * 
 */

var someValue = 100;

function Student(firstNameArgument,lastNameArgument,addressArgument) {
	this.firstNameProperty = firstNameArgument;
	this.lastNameProperty = lastNameArgument;
	this.addressProperty = addressArgument;

	//Here we are not getting this property as a parameter, All the objects
	//created from this constructor will have courseFee attribute
	this.courseFee = 500;

	this.firstInstallment = someValue;

	//This function would be available to everyone
	this.myTestMethod = function(parameter) {
		console.log("I am inside my test method " + parameter);
	};

	this.displayInfo = function() {
		console.log(" First name : " + this.firstNameProperty);
		console.log(" Last name : " + this.lastNameProperty);
		console.log(" Address : " + this.addressProperty);
		console.log(" Course Fee : " + this.courseFee);
		console.log(" First Installment : " + this.firstInstallment);
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


//These properties and methods are specific to obj2 only
stuTwo.myNewProperty = "This is my stupid property value";
console.log(stuTwo.myNewProperty);
stuTwo.myTestMethod("************");

//here we are adding a method to the object, but this method will only be available to this object only
stuTwo.myOwnFunctionSpecificToMe = function(specific) {
	console.log("This is a function specific to me only " + this.firstNameProperty + " " + specific);
};
stuTwo.myOwnFunctionSpecificToMe("<<>>>");


var crazyStudent = new Student("Paul","Doluweera");
var love = new Student("Baluthadiya");

console.log(crazyStudent.displayInfo())
console.log(love.displayInfo())








