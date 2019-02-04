var n = 11
	var result 

	var remainder = n%2

	if (0 == remainder) {
		result = "This is even"
	} else {
			result = "This is odd"
	}

	console.log(result)
	// positive or negative
	var n = 0
	if (n>0) {
		var result = "This number is "+n+' is positive';
	} else {
		var result = " This Number is " + n + " is negative";
	}