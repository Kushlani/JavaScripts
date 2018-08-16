
//here var x represents the keys/properties of the given object
var person = {fname: "John", lname:"Doe", age: 25, mname: "Smith"};
	

	for(var x in person){
		console.log(x+" = "+person[x]);
	}
	