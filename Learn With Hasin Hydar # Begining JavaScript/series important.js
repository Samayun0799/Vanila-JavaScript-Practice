	  var series = ""
	  var n;
	  for (var i = 1; i < 10 ; i++) {
	  	 n = i * 2
	     series = series + n + " "
	  }
		console.log("Series one "+series)

	// var n = 1
	// while(n<=10){
	// 	n*=2
	// 	console.log(n)
	// }
//0,3,8,15,24.....
	  var series = ""
	  var n;
	  for (var i = 1; i < 10 ; i++) {
	  	 n = i * i -1
	     series = series + n + " "
	  }
	console.log("Series two "+series)
// 
	  var series = ""
	  var n;
	  for (var i = 1; i < 10 ; i++) {
	  	 n = i *2
	     series = series + n + " "
	  }
	console.log("Series Three "+series)


	//  1,4,3,8,5,12,7,16,9,20
	//  jur hole dugun bijur hole return
	 var series = ""
	  var n;
	  for (var i = 1; i <= 10 ; i++) {
	  	 n = i 
	  	 if (n%2 == 0) {
	  	 	n = i * 2
	  	 }
	     series = series + n + " "
	  }
	console.log("Series Four "+ series)



	// series 5
	//  = 0 ,1,,1,2,3,5,8,13.... fibonakki

	var series = " 0 1 "
	var x = 0
	var y = 1
	for (var i = 1; i < 10; i++) {
		n = x + y
		x  = y
		y = n
		series = series + n + " "
	}


console.log("Series Five " + series)

