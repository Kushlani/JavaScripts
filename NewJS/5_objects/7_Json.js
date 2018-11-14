/**
 *
 * JSON = Java Script Object Notation.
 *
 * Notation is a system of written symbol
 *
 * JSON LOOKS LIKE AN OBJECT LITERAL BUT IT IS JUST A WAY OF FORMATTING INFORMATION/DATA AS A STRING.
 *
 * IT IS A WAY OF STRUCTURING DATA/INFORMATION AS A JAVA SCRIPT OBJECT LITERAL
 *
 * THIS IS A FORMAT USED TO STRUCTURE DATA 
 * WHEN DATA IS STUCTRED AS A JSON IT LOOKS LIKE A JS OBJECT 
 *
 * When transfering data over internet we use JSON mostly
 *
 * here key is always string 
 * 
 * { 
 *   "key":"value",
 * 	 "key": 100
 * } 
 * 
 */

var studentObj = {
	firstName: "Kush",
	lastName: "Sumudumali",
	address: "Sydney",
	age: 34,
	subjects: [{subjectName: "Maths", marks: 75}, 
	{subjectName: "Physics", marks: 85},
	{subjectName: "Science",marks: 95
}]
};

//Identical Json for this object would be
//here this string is a JSON string where i have given some information about a student
//JSON is a way of keeping/structuring data.
var studentObjJsonString = '{ "firstName": "Kush", "lastName" : "Sumudumali", "address" : "Sydney" }';


//We can generate a JSON string from a JS object.
console.log( "JSON STRING FOR STUDENT OBJET IS : \n" + JSON.stringify(studentObj) );

//You can convert a JSON into a JS Object

var jsObjDefinition = JSON.parse(studentObjJsonString);
//Here i amm accessing the object property
console.log( "First name: " + jsObjDefinition.firstName);