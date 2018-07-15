/**
 * Student 
 * 		name,
 * 		address,
 * 		age,
 * 		marks[]
 *
 * Subject
 * 		name,
 * 		stream
 *
 * Marks 
 * 		subject,
 * 		score
 *
 *
 * maths, physics, chemestry --> Science
 * econ, accounting --> Commerce
 * 
 * 
 */


function Student (name,address,age,marks) {
	this.name = name;
	this.address = address;
	this.age = age;
	this.marks = marks;
}

function Subject (name,stream) {
	this.name = name;
	this.stream = stream;
}

function Marks (subjectObj,score) {
	this.subjectObj = subjectObj;
	this.score = score;
}

var subjectMaths = new Subject ("Maths","Science");
var subjectChemistry = new Subject ("Chemistry","Science");
var subjectPhysics = new Subject ("Physics","Science");
var subjectEcon = new Subject ("Econ","Commerce");
var subjectAccounting = new Subject ("Accounting","Commerce");

var marksDetailsAnne = [new Marks (subjectMaths, 75),new Marks (subjectAccounting, 69),new Marks (subjectChemistry, 87)];
var studentDetailsAnne = new Student ("Anne","Colombo 01", 17, marksDetailsAnne);

var marksDetailsEric = [new Marks (subjectEcon, 43),new Marks (subjectAccounting, 59),new Marks (subjectChemistry, 51)];
var studentDetailsEric = new Student ("Eric","Colombo 03", 17, marksDetailsEric);

var marksDetailsDavid = [new Marks (subjectChemistry, 62),new Marks (subjectMaths, 81),new Marks (subjectPhysics, 55)];
var studentDetailsDavid = new Student ("David","Colombo 08", 17, marksDetailsDavid);

var studentDetailsArray = [studentDetailsAnne,studentDetailsEric,studentDetailsDavid];

var maxMaths = 0;
var maxChemistry = 0;
var maxPhysics = 0;
var maxEcon = 0;
var maxAccounting = 0;

for (var x = 0; x < studentDetailsArray.length; x++) {
    var studentObject = studentDetailsArray[x];
    var studentMarksArray = studentObject.marks;

    //traversing marks array
    for (var y = 0; y < studentMarksArray.length; y++) {
        var currentMarkObj = studentMarksArray[y];
        var currentSubObj = currentMarkObj.subjectObj;

        /*if ((currentSubObj.name == "Maths") && (currentMarkObj.score > maxMaths)) {
            maxMaths = currentMarkObj.score;

        } else if ((currentSubObj.name == "Chemistry") && (currentMarkObj.score > maxChemistry)) {
            maxChemistry = currentMarkObj.score;

        } else if ((currentSubObj.name == "Physics") && (currentMarkObj.score > maxPhysics)) {
            maxPhysics = currentMarkObj.score;

        } else if ((currentSubObj.name == "Econ") && (currentMarkObj.score > maxEcon)) {
            maxEcon = currentMarkObj.score;

        } else if ((currentSubObj.name == "Accounting") && (currentMarkObj.score > maxAccounting)) {
            maxAccounting = currentMarkObj.score;
        }

    }*/


        //var currentScore = currentMarkObj.score;
        switch (currentSubObj.name) {

            case "Maths":
                maxMaths = currentMarkObj.score > maxMaths ? currentMarkObj.score : maxMaths;
                break;
            case "Chemistry":
                maxChemistry = currentMarkObj.score > maxChemistry ? currentMarkObj.score : maxChemistry;
                break;
            case "Physics":
                maxPhysics = currentMarkObj.score > maxPhysics ? currentMarkObj.score : maxPhysics;
                break;
            case "Econ":
                maxEcon = currentMarkObj.score > maxEcon ? currentMarkObj.score : maxEcon;
                break;
            case "Accounting":
                maxAccounting = currentMarkObj.score > maxAccounting ? currentMarkObj.score : maxAccounting;
                break;
        }
    }

}
console.log("Max score for Maths is : " + maxMaths);
console.log("Max score for Chemestry is : " + maxChemistry);
console.log("Max score for Physics is : " + maxPhysics);
console.log("Max score for Econ is : " + maxEcon);
console.log("Max score for Accounting is : " + maxAccounting);