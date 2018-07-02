/**
 * Comparison operators are used in logical statements to determine equality or difference between variables or values.
 * ALWAYS RETURNS A BOOLEAN VALUE
 *
 * Operator		Description							Comparing	Returns	
	==			equal to							x == 8		false	
													x == 5		true	
													x == "5"	true	
	===			equal value and equal type			x === 5		true	
													x === "5"	false	
	!=			not equal							x != 8		true	
	!==			not equal value or not equal type	x !== 5		false	
													x !== "5"	true	
													x !== 8		true	
	>			greater than						x > 8		false	
	<			less than							x < 8		true	
	>=			greater than or equal to			x >= 8		false	
	<=			less than or equal to				x <= 8		true	

 */

// == Euqal to
var x = 8;
console.log (x==8);


// === Euqal value and euqal type
var y = 6;
console.log (y===6);


// != Not equal
var z = 8;
console.log (z!=8);
console.log (z!=7);

// !== Not equal value and not euqal type
var a = "8";
console.log (a!=="8");


// > Greater than
var b = 8;
console.log (b > 6);


// < Less than
var c = 8;
console.log (c < 6);


// >= Greater than or equal to
var d = 8;
console.log (d >= 6);

// <= Less than or equal to
var e = 8;
console.log (e <= 6);