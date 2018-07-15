/**
 *
 * Department
 * Employee 
 *
 * Java : Employee <-- Manager (Inheritence, Whatever you defined in employee obj (attributes and operations) 
 * will get inherited to Manager Object).
 * 
 */

//Object Constructor
function Department(deptName, address, employees) {
	this.deptName = deptName;
	this.address = address;
	this.employees = employees;

	//Here i can have a list of employees belongs to the department
	//we can keep the emp list in the department side
	//forex this.employees = employees;

	this.displayDepartmentInfo = function() {
		return " Deparment Name : " + this.deptName + "\n Department Address : " + 
		this.address + " No of Emps : " + this.employees  +  "\n";
	};
}

function Employee(empName,designation,empType,departmentObj) {
	this.empName = empName;
	this.designation = designation;
	this.empType = empType;
	this.department = departmentObj;

	this.displayEmployeeInfo = function() {
		return "Emp Name : " + this.empName + ", Designation : " + this.designation +
		", Emp Type: " + this.empType + ", Deaprtment Name : " + this.department.deptName + 
		", Department Address : " + this.department.address;
	};

	//Here I am calling the display deparment info method of the department object..
	this.displayEmpInfoAnotherWay = function() {
		return "Emp Name : " + this.empName + ", Designation : " + this.designation +
		", Emp Type: " + this.empType + this.department.displayDepartmentInfo();
	};
}


//Creating an object from the Department object constuctor
var educationDepartmentObj = new Department("Education Department","Pelawatta",400);

//calling a method on the object, since the method returns a value we have created a variable to capture it
var returnedvalue = educationDepartmentObj.displayDepartmentInfo();
console.log(returnedvalue);
console.log(new Department("Finance","Battaramulla",100).displayDepartmentInfo());

//Creating an Employee object from the Employee constructor function, we are passing the department object

var empOne = new Employee("Kushlani","Admin Assistant","Contract",educationDepartmentObj);
console.log(empOne.displayEmployeeInfo());

var empArray = [ empOne , 
new Employee("Aluthge","Manager","Fulltime",educationDepartmentObj) ];


var newEmpArray = [];
for (var y = 0; y < 100; y++) {

	var newEmpObj = new Employee("Employee " + y , "Designation" + y,"Contract",educationDepartmentObj);
	newEmpArray.push(newEmpObj);
}


console.log(newEmpArray.length);
console.log(newEmpArray[0].empName);


for (var x = 0 ; x < empArray.length; x++) {
	var emp = empArray[x];
	console.log(emp.displayEmployeeInfo());
} 

for (var x = 0 ; x < newEmpArray.length; x++) {
	var emp = newEmpArray[x];
	console.log(emp.displayEmployeeInfo());
} 
