var points1 = [40, 100, 1, 5, 25, 10, 15];
points1.sort(function(a,b){
	return a - b; // if 40 and 100 , if minus value keep it as it is, otherwise swap , ASSENDING ORDER
});
console.log(points1);

var points2 = [40, 100, 1, 5, 25, 10, 15];
points2.sort(function(a,b){
	return b - a; // DESENDING ORDER
});
console.log(points2);


//Map() => Is used to perform some action all the elements on the array.
var numbersArray = [1, 2, 3, 4];

var newNumbersArray = numbersArray.map(function(number){
    return number * 2;
});

console.log(numbersArray);
console.log(newNumbersArray);

var nestedMap = numbersArray.map(function(x) {
	return x * x;
}).map(function(x) {
	return x*2;
});

console.log(nestedMap);


//This is something else ...
function someFunction() {
	return 10;
}

function anotherFunction(x) {
	return x * 10;
}

var testVariable = someFunction() * anotherFunction(10);
console.log(testVariable);


function TestObject(x,y) {
	this.x = x;
	this.y = y;

	this.someMethod = function() {
		console.log(" X :  " + this.x + " Y " + this.y);
		return new TestObject(this.x * 2, this.y*2);
	};
}

var obj = new TestObject(2,3);
var res = obj.someMethod().someMethod(); //What is the value now ? Tell me after your got u r dinner ??16,24
console.log(res);











