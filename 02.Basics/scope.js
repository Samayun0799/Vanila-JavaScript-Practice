let iAmGlobal  ='someValue'


if (true) {
	let IAmLocal = 'someMoreValue'
	IAmLocal ="Local Variable Inside if block..."
	iAmGlobal = "Global Variable Inside if block"
	console.log(IAmLocal)
	console.log(iAmGlobal)
}

// console.log(IAmLocal)
console.log(iAmGlobal)


function Scope(argument) {
	var fLocal = 'fLocal'
	console.log(fLocal)
	
}
	var fLocal = 'if block'
	console.log(fLocal)
	
Scope()
console.log(fLocal)