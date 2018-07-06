/**
 * Uni Directoional Relationship
 */

function Department(deptName, address, employees) {
	this.deptName = deptName;
	this.address = address;
	this.employees = employees;
};

function Employee(empName,designation,empType,departmentObj) {
	this.empName = empName;
	this.designation = designation;
	this.empType = empType;

	this.department = departmentObj; //Can reach Employee from department, so uni directional
}

/**
 * Another uni directional 
 */
function Department(deptName, address, employeesArray) {
	this.deptName = deptName;
	this.address = address;
	this.employees = employeesArray; //Can reach employees from department, stil uni directional
};

function Employee(empName,designation,empType,departmentArray) {
	this.empName = empName;
	this.designation = designation;
	this.empType = empType;
}


/**
 * Bi Directional 
 * 
 */
function Department(deptName, address, employeesArray) {
	this.deptName = deptName;
	this.address = address;
	this.employees = employeesArray; //Can reach Employees from department
};

function Employee(empName,designation,empType,departmentObj) {
	this.empName = empName;
	this.designation = designation;
	this.empType = empType;
	this.department = departmentObj; //Can reach deaprtment from employee
}
