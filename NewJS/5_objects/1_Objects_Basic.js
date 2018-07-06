/**
 * objects are complex data structures 
 * objects created in the heap
 *
 * Objects has
 * 			properties --> attributes
 * 			behaviour,action --> methods,operations, functions
 *
 * Objects represent real world data structures like
 * 		studdent 
 * 		employee etc..
 *
 *
 * Object format = {
 * 		properties:value,
 * 		properties:value,
 * 		properties:value,
 * 		properties:value
 * }
 *
 * Objects are hold by object reference variable, objects are mutable,
 * OBJECT REFERENCE VARIABLES CONTAINS THE MEMEORY ADDRESS OF THE ACTUAL OBJECT 
 * SO WHENEVER YOU ASSIGN AN OBJECT REFERENCE VARIABLE TO ANOTHER OBJECT REFERENEC VARIABLE THE REAL LOCATION OF THE OBJECT GET COPIED
 * SO WHATEVER CHANGES YOU MADE ON EITHER OF THE OBEJCT REFERENCE VARIABLES AFFECT THE SAME OBJECT
 *
 * var objectReferenceVariable = <Object Definition>
 *
 * Objects can have another objects withinn them 
 *
 * 'This' is a keyword(reserved word in JS) used to refer object properties
 *
 * 	Methods are functions defined within objects
 * 	methodName : function(parameters) {
 * 		//Function body....
 * 	}
 * 
 */

var student = {
	firstName: "Kushlani",
	lastName: "Aluthge",
	address: {
		streetNumber: 40,
		road: "Bungarribee",
		city: "Blacktown"
	},
	fullName : function() {
		console.log(this.firstName + " " + this.lastName);
	},
	/**
	 * This method accept a variable from outside
	 * Here greeting is a variable (we dont have to define it with var, but in Java you have to do it )
	 * this method expect a value for greeting variable, greeting variable is called parameter of the method.
	 *
	 * PARAMETERS HELP A METHOD TO PROVIDE MULTIPLE BEHAVIOURS 
	 * 
	 */
	myNameWithGreeting: function(greeting) {
		console.log(greeting + " " + this.firstName);
		//greetiing is a variable 
		greeting += "CHANGED GREETING....";
		console.log(greeting);
	},
	/**
	 * function is a nothing but a group of programming statements
	 */
	countTo10: function() {
		for (var x = 0;x < 10;x++) {
			console.log(x);
		}
	}
};


//You can access properties/attributes of an objects
console.log(student.firstName);
console.log(student["firstName"]);




//method call with ()
// In order to access/call method of an object you have to use the object reference variable
// obejectReferenceVaraible.methodName(<parameters if any>)
//     
student.fullName();
student.myNameWithGreeting("Hello");
student.myNameWithGreeting("Hola");
student.myNameWithGreeting("Hi");
student.myNameWithGreeting("Onekkam...");
//You can still call the method without passing values to the method, but this is not possible in Java
student.myNameWithGreeting();




/**
 * A method is a function.
 * A function is a grouping of programming statements
 *
 */

var student = {
	firstName: "Kushlani",
	lastName: "Aluthge",
	address: {
		streetNumber: 40,
		road: "Bungarribee",
		city: "Blacktown"
	},
	
};

for(var key in student) {
	console.log(student[key]);
}


/**
 * In JS you can add properties to objects runtime dyanamically
 * 
 */

var studentObject = {
	name: "Name",
	address: "Address",
	age: 25,
};

studentObject.myNewProperty = "my new property value....";


console.log(studentObject.myNewProperty);

/**
 *	THIS IS VERY IMPORTANT
 * Objects are mutable 
 */

var studentA = {
	name: "Student A",
	address: "Address",
	age: 25,
};

var studentB = studentA;
studentB.name = "This is student B name";
console.log(studentA.name); // This is student B name

var x = 100;
x += 10;
var y  = x;
y  = 200;
console.log(x);// 110

