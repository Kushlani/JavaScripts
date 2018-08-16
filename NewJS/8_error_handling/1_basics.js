function withoutErrorHandling() {
	var num = 1;
	num.toPrecision(500);   // This is a Range Error....
}

withoutErrorHandling();