/**
 * Create a calculator which do + , - , * , / and % and display value
 *
 * properties 2 values 
 */

function Cal(one,two) {

	this.numOne = one;
	this.numTwo = two;

	this.numSum =function(){
		console.log(this.numOne + this.numTwo);
	};

	this.numMinus =function(){
		console.log( this.numOne - this.numTwo);
	};

	this.numMulti =function(){
		console.log( this.numOne * this.numTwo);
	};

	this.numDivi =function(){
		console.log( this.numOne / this.numTwo);
	};

	this.numModu =function(){
		console.log( this.numOne % this.numTwo);
	};
};

var Cal = new Cal(6,2);
console.log(Cal.numOne + Cal.numTwo);
console.log(Cal.numOne - Cal.numTwo);
console.log(Cal.numOne * Cal.numTwo);
console.log(Cal.numOne / Cal.numTwo);
console.log(Cal.numOne % Cal.numTwo);


Cal.numSum();
Cal.numMinus();
Cal.numMulti();
Cal.numDivi();
Cal.numModu();


function Details(Department, Manager, Employee) {
	this.Department = Department;
	this.Manager = Manager;
	this.Employee = Employee;

	this.data = function() {
		console.log("Department :" + "" + this.Department + "," + "Manager :" + "" + this.Manager + "," + "Employee :" + "" + this.Employee);
	};
};

var details = new Details("Public Finance", "Luara", "Sam");
details.data();



