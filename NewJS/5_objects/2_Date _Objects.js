/*Creating Date Objects
Date objects are created with the new Date() constructor.

There are 4 ways to create a new date object:
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)

*/

//new Date() 
//Date objects are static. The computer time is ticking, but date objects are not.
var dateone = new Date();
console.log(dateone);


//new Date(year, month, day, hours, minutes, seconds, milliseconds)
//JavaScript counts months from 0 to 11. January is 0. December is 11.
var datetwo = new Date(2018, 6, 4, 9, 0, 30, 0);
console.log(datetwo);


//Previous Century
//One and two digit years will be interpreted as 19xx:
var datethree = new Date(99, 6, 4);
console.log(datethree);

var datefour = new Date(9, 6, 4);
console.log(datefour);

//JavaScript Stores Dates as Milliseconds
//JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).

//Zero time is January 01, 1970 00:00:00 UTC.

//Now the time is: 1530665879730 milliseconds past January 01, 1970

//new Date(milliseconds)
//new Date(milliseconds) creates a new date object as zero time plus milliseconds:

var datefive = new Date(86400000);
console.log(datefive);

/**
 *There are generally 3 types of JavaScript date input formats:

	Type			Example
	ISO Date	"2015-03-25" (The International Standard)
	Short Date	"03/25/2015"
	Long Date	"Mar 25 2015" or "25 Mar 2015"
 * 
 */

//JavaScript ISO Dates
//ISO 8601 is the international standard for the representation of dates and times.
//The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:
//Date and time is separated with a capital T.
//UTC time is defined with a capital letter Z.
//If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:
var datesix = new Date("2018-07-06");
console.log(datesix);


//JavaScript Short Dates.
//Short dates are written with an "MM/DD/YYYY" syntax like this:

var dateseven = new Date("07-06-2018");
console.log(dateseven);

//JavaScript Long Dates.
//Long dates are most often written with a "MMM DD YYYY" syntax like this:
//month can be written in full (January), or abbreviated (Jan):

var dateeight = new Date("06 July 2018");
console.log(dateeight);

//Date Input - Parsing Dates
//If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
//Date.parse() returns the number of milliseconds between the date and January 1, 1970:
var datemillisec = Date.parse("06 July 2018");
console.log(datemillisec);

//You can then use the number of milliseconds to convert it to a date object:
var datemillisec = Date.parse("06 July 2018");
var date = new Date(datemillisec);
console.log(date);


/**JavaScript Get Date Methods
	These methods can be used for getting information from a date object:

		Method				Description
		getFullYear()		Get the year as a four digit number (yyyy)
		getMonth()			Get the month as a number (0-11)
		getDate()			Get the day as a number (1-31)
		getHours()			Get the hour (0-23)
		getMinutes()		Get the minute (0-59)
		getSeconds()		Get the second (0-59)
		getMilliseconds()	Get the millisecond (0-999)
		getTime()			Get the time (milliseconds since January 1, 1970)
		getDay()			Get the weekday as a number (0-6)
 *
 * 
 */

//The getFullYear() Method
var date = new Date();
date.getFullYear();

//The getMonth() Method
var date = new Date();
date.getMonthr();

//The getDate() Method
var date = new Date();
date.getDate();

//The getHours() Method
var date = new Date();
date.getHours();

//The getMinutes() Method
var date = new Date();
date.getMinutes();

//The getSeconds() Method
var date = new Date();
date.getSeconds();

//The getMilliseconds() Method
var date = new Date();
date.getMilliseconds();

//The getTime() Method
var date = new Date();
date.getTime();

//The getDay() Method
var date = new Date();
date.getDay();