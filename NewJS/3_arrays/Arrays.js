/**
 * An array is a special variable, which can hold more than one value at a time.
   An array can hold many values under a single name, and you can access the values by referring to an index number.

   Format :
   var array_name = ["item1", "item2", ...];       

   JS Arrays are dynamic <-- Can hold different types of data in its elements
   This is not the case with strict type languages
   var arrr = [true,23,"string val",7.3433];
   Java --> int age = 30; <-- int is a number type in java
   			String testString = "ABCD";
   			String [] myTestArray = {"A","B","C"};

 */


//Full Array :with JavaScript, the full array can be accessed by referring to the array name:
var fruits = ["Banana","Apple","Mango"];
console.log(fruits); 

// or you can write it like below

var fruits = [
		"Banana",
		"Apple",
		"Mango"
];
console.log(fruits);


//Access the Elements of an Array : You can refer to an array element by referring to the index number.
var fruits = ["Banana","Apple","Mango"];
console.log(fruits[2]); 
console.log(fruits[0]); 

fruits[1] = "Orange";
console.log(fruits);