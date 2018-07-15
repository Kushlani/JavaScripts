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


var subjectBiology = new Subject ("Biology","Science");
var subjectPhysics = new Subject ("Physics","Science");
var subjectChemistry = new Subject ("Chemistry","Science");
var subjectLogic = new Subject ("Logic","Arts");
var subjectEcon = new Subject ("Econ","Arts");
var subjectEnglish = new Subject ("English","Arts");

var marksAnne = [new Marks (subjectBiology,78),new Marks (subjectPhysics,64),new Marks (subjectChemistry,83)];
var marksDerik = [new Marks (subjectEcon,53),new Marks (subjectEnglish,84),new Marks (subjectLogic,73)];
var marksMike = [new Marks (subjectBiology,82),new Marks (subjectPhysics,61),new Marks (subjectChemistry,72)];
var marksRose = [new Marks (subjectBiology,43),new Marks (subjectPhysics,77),new Marks (subjectChemistry,75)];
var marksJean = [new Marks (subjectEcon,86),new Marks (subjectEnglish,92),new Marks (subjectLogic,91)];

var stuDetailsAnne = new Student ("Anne","colombo 08",18,marksAnne);
var stuDetailsDerik = new Student ("Derik","colombo 09",18,marksDerik);
var stuDetailsMike = new Student ("Mike","colombo 02",18,marksMike);
var stuDetailsRose = new Student ("Rose","colombo 07",18,marksRose);
var stuDetailsJean = new Student ("Jean","colombo 01",18,marksJean);


var stuDetailsArray = [stuDetailsAnne, stuDetailsDerik, stuDetailsMike, stuDetailsRose, stuDetailsJean];

var maxBiology = 0;
var maxPhysics = 0;
var maxChemistry = 0;
var maxLogic = 0;
var maxEcon = 0;
var maxEnglish = 0;

for (x = 0; x < stuDetailsArray.length; x++) {
    var studentObject = stuDetailsArray[x];
    var stuMarksArray = studentObject.marks;

    for (y = 0; y < stuMarksArray.length; y++) {
    	var currentMarksObj = stuMarksArray[y];
        var currentSubObj = currentMarksObj.subjectObj;

        if ((currentSubObj.name == "Biology") && (currentMarksObj.score > maxBiology)) {
            maxBiology = currentMarksObj.score;

        } else if ((currentSubObj.name == "Physics") && (currentMarksObj.score > maxPhysics)) {
            maxPhysics = currentMarksObj.score;

        } else if ((currentSubObj.name == "Chemistry") && (currentMarksObj.score > maxChemistry)) {
            maxChemistry = currentMarksObj.score;

        } else if ((currentSubObj.name == "Logic") && (currentMarksObj.score > maxLogic)) {
            maxLogic = currentMarksObj.score;

        } else if ((currentSubObj.name == "Econ") && (currentMarksObj.score > maxEcon)) {
            maxEcon = currentMarksObj.score;

        } else if ((currentSubObj.name == "English") && (currentMarksObj.score > maxEnglish)) {
            maxEnglish = currentMarksObj.score;
        }
    }
}
console.log("Biology : " + maxBiology);
console.log("Physics : " + maxPhysics);
console.log("Chemistry : " + maxChemistry);
console.log("Logic : " + maxLogic);
console.log("Econ : " + maxEcon);
console.log("English: " + maxEnglish);