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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Department(deptName, address) {
	this.deptName = deptName;
	this.address = address;
	
	this.displayDepartmentInfo = function() {
		return " Deparment Name : " + this.deptName + " Department Address : " + this.address;
	};
}

function Employee(empName,designation,empType,departmentObj) {
	this.empName = empName;
	this.designation = designation;
	this.empType = empType;
	this.department = departmentObj;

	this.displayEmployeeInfo = function() {
		return "Emp Name : " + this.empName + ", Designation : " + this.designation +", Emp Type: " + this.empType + 
		", Deaprtment Name : " + this.deaprtment.deptName + ", Department Address : " + this.department.address;
	};

}

var eduDepartmentObj = new Department("Finance","Colombo 01");


var empdData = new Employee("Kushlani","Admin Assistant","Contract",eduDepartmentObj);

var empdDataArray = [new Employee("Kushlani","Admin Assistant","Contract",eduDepartmentObj),
	new Employee("Lakshani","Accountant","Permanent",eduDepartmentObj),new Employee("Anne","Manager","Permanent",eduDepartmentObj)];

for(var i = 0; i < empdDataArray.length; i++) {
	var finalData = empdDataArray[i];
	console.log(finalData.empName,finalData.designation);
	//or i can call the displayEmployeeInfo method details
	//console.log(finalData.displayEmployeeInfo());
}