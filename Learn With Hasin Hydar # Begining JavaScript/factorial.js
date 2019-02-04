var n = 5
var factorial = 1

for (var j = n; j>1; j--) {
	factorial = 1
	for (var i = j; i >1; i--) {
		 factorial = factorial*i
	}
	console.log("Factorial of " , j , " is ",factorial)
}



factorial = 1
for (var i = 1; i <=10; i++) {
	factorial *= i
		console.log("Factorial of " , i, " is ",factorial)


}