
// More Time Complexity Uses
let myAdder = function (num1 , num2) {
	let added = num2 + num1
	return added
}

// Optimised Return System
let myMultiplier = function(num1 , num2){
  return num1*num2
}

let guestUser = function(name = "Anonymous" , courseCount = 0){
  return 'Hello '+ name+ ' and your course count is '+ courseCount
}

let name = null
console.table(guestUser('John', 5))

