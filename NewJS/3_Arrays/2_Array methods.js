//Converting Arrays to Strings
//The JavaScript method toString() converts an array to a string of (comma separated) array values.

var fruits = ["Apple","Mango","Orange"];
console.log(fruits.toString());

//The join() method also joins all array elements into a string.
//It behaves just like toString(), but in addition you can specify the separator:

var fruits = ["Apple","Mango","Orange"];
console.log(fruits.join("-"));

//Popping
//The pop() method removes the last element from an array:
//The pop() method returns the value that was "popped out":

var fruits = ["Apple","Mango","Orange"];
console.log(fruits.pop());
console.log(fruits);

//Pushing
//The push() method adds a new element to an array (at the end):
//The push() method returns the new array length:
var fruits = ["Apple","Mango","Orange"];
console.log(fruits.push("Guava"));
console.log(fruits);


//Shifting Elements
//Shifting is equivalent to popping, working on the first element instead of the last.
//The shift() method removes the first array element and "shifts" all other elements to a lower index.
var fruits = ["Apple","Mango","Orange"];
console.log(fruits.shift());
console.log(fruits);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
var fruits = ["Apple","Mango","Orange"];
console.log(fruits.unshift("Grapes"));
console.log(fruits);

//Changing Elements
//Array elements are accessed using their index number:
var fruits = ["Apple","Mango","Orange"];
fruits[0] = "Mandarine";
console.log(fruits);

//The length property provides an easy way to append a new element to an array:
var fruits = ["Apple","Mango","Orange"];
fruits[fruits.length] = "Mandarine";
console.log(fruits);

//Deleting Elements
//Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:
var fruits = ["Apple","Mango","Orange"];
delete fruits[1];
console.log(fruits);


//Splicing an Array
//The splice() method can be used to add new items to an array:
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

var fruits = ["Apple","Mango","Orange"];
fruits.splice(2,0,"Kiwi","Banana");
console.log(fruits);

//Using splice() to Remove Elements
//With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
//The first parameter (0) defines the position where new elements should be added (spliced in).
//The second parameter (1) defines how many elements should be removed.
//The rest of the parameters are omitted. No new elements will be added.
var fruits = ["Apple","Mango","Orange"];
fruits.splice(0,1);
console.log(fruits);

//Merging (Concatenating) Arrays
//The concat() method creates a new array by merging (concatenating) existing arrays:
var fruits = ["Apple","Mango","Orange"];
var vege = ["Pumpking", "Kale", "Beet"];
var food = fruits.concat(vege);
console.log(food);

//The concat() method can also take values as arguments:
var fruits = ["Apple","Mango","Orange"];
var food = fruits.concat(["Pumpking", "Kale", "Beet"]);
console.log(food);

//Slicing an Array
//The slice() method slices out a piece of an array into a new array.
//This example slices out a part of an array starting from array element 1 ("Orange"):
var fruits = ["Apple","Mango","Orange"];
var citrus = fruits.slice(1);
console.log(citrus);//This example slices out a part of an array starting from array element 1 ("Apple")