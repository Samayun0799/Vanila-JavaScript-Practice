
	var studentOne = "Rakib"
	var studentTwo = "sohel"
	var studentThree = "Rakib"
	console.log(studentOne, studentTwo ,studentThree)


	var fruits = ["apple" , "banana" , "orange"]
	fruits[4] = "grape"
	// position = index/ offset
	console.log(fruits.length)

	var lastOffset = fruits.length-1
	console.log(fruits[lastOffset])
	var myList = ["apple" , "banana" , "orange"]
	// myList[myList.length] = 'Grape'
	// myList[myList.length] = 'Grape1'
	// myList[myList.length] = 'Grape2'
	myList.push("grape")
    myList.unshift("pineapple")
   var lastItem =  myList.pop()
   lastItem =  myList.pop()

    var firstItem = myList.shift()
    console.log(firstItem)
	console.log(lastItem)
	console.log(myList)


	var males = ["samayun" , "shakil" , "chowdhury"]
	var females = ["susmita" , "aria janat" , "Ishika Tabassum"]

	// var lastPerson = males.pop()
    // females.push("Samia")
    var personToremove = males[1]
     females.push(personToremove)

    // delete(males[2])
    males.splice(2,1)

	console.log( males , females)
	// console.log(lastPerson)
		console.log( males.length , females.length)
