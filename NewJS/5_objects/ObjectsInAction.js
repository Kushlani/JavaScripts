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


function Details(Department,Manager,Employee) {
	this.Department = Department;
	this.Manager = Manager;
	this.Employee = Employee;
	

	this.data =function(){
		console.log("Department :" + "" + this.Department + "," +"Manager :"+ "" + this.Manager + "," + "Employee :" + ""+ this.Employee);
};

};

var Details = new Details("Public Finance", "Luara", "Sam");
Details.data();

//you want to  get reports of students by grading on marks
function Studentnew (name,studentnum,address,subject) {
		this.Name = name;
		this.StudentNum = studentnum;
		this.Address = address;
		this.Subject = ["Science","Maths","English"];
 
}

function Subject (subjectname,marks) {
		this.Subject = subjectname;
		this.Marks = marks;
		
}


var Studentnew = new Studentnew ("Sam","1","40, Queens Rd,UK",Subject[0]);
var Studentnew = new Studentnew ("Rian","2","50, Park Rd,UK",Subject[1]);
var Studentnew = new Studentnew ("Anne","3","60, River Rd,UK",Subject[0]);
var Studentnew = new Studentnew ("Rose","4","70, Sand Rd,UK",Subject[2]);
var Studentnew = new Studentnew ("Mike","5","80, Hill Rd,UK",Subject[1]);

var Subject = new Subject (Subject[0], 75);
var Subject = new Subject (Subject[1], 55);
var Subject = new Subject (Subject[0], 82);
var Subject = new Subject (Subject[2], 63);
var Subject = new Subject (Subject[1], 34);


var grade = [Studentnew,Subject];

for (x =1; x <=grade.length; x++);
