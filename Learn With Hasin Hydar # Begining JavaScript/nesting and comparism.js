	// nesting and comparism

	var personOne = "jamal"
	var personTwo = "kamal"
	var areTheBrother = true

	if ("jamal" == personOne) {
		if ("kamal" == personTwo) {
			if (areTheBrother) {
				console.log("jamal & Kamal are two brother")
			}else{
				console.log("kamal & jamal is not brother")
			}
		}
		else{
			console.log("kamal is not person two")
		}
	} else {
		console.log("everything is false")
	}




	
	//2 ,3 ,4 ,5

	var n = 7
	if (n<10) {
		if (2==n || 3 == n || 4 == n || 5 == n) {
			console.log("This number is " , n ," is amaller than 10 and it's a prime number")

		} else {
			console.log("This number is " , n ," is amaller than 10 and it's  not a prime number")

		}
	}else{
		console.log("it is graeter than 10")
	}