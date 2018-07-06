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
		return "**********\n\tDeparment Name : " + this.deptName + ",\n\tDepartment Address : " + this.address + "\n***************";
	};
};

function Employee(empName,designation,empType,department) {
	this.empName = empName;
	this.designation = designation;
	this.empType = empType;
	this.department = department;

	this.displayEmployeeInfo = function() {
		return "Emp Name : " + this.empName + ", Designation : " + this.designation +
		", Emp Type: " + this.empType + ", Deaprtment Name : " + this.department.deptName + ", Department Address : " + this.department.address;
	};

	//Here I am calling the display deparment info method of the deparment object..
	this.displayEmpInfoAnotherWay = function() {
		return "Emp Name : " + this.empName + ", Designation : " + this.designation +
		", Emp Type: " + this.empType + this.department.displayDepartmentInfo();
	}
}


//Creating an object from the object constuctor
var educationDepartment = new Department("Education Department","Palawatta",400);

//calling a method on the object, since the method returns a value we have created a variable to capture it
var value = educationDepartment.displayDepartmentInfo();
console.log(value);

var empArray = [ new Employee("Kushlani","Admin Assistent","Contract",educationDepartment), 
new Employee("Aluthge","Manager","Fulltime",educationDepartment) ];


for (var x = 0 ; x< empArray.length; x++) {
	var emp = empArray[x];
	console.log(emp.displayEmployeeInfo());
} 
