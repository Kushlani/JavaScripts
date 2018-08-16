/**
 *  This can be considered as a library
 *  Someone might have written this for the purpose of resuing some functionality for others.
 *
 *	So Jquery,Angular,React etc..... 
 *  
 * 
 */
function Calculator(x,y) {
	this.x = x;
	this.y = y;


	this.sum = function() {
		return this.x + this.y;
	};
}



