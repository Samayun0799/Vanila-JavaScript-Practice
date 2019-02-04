var list = [
	"sat",
	"sun",
	 "mon", //-5
	"tue",
	"wed",//-3
	"thu",
	"fri"
]


// var chunk = list.slice(4 ,6)
var length = list.length-3
// var chunk = list.slice(length ,5)

var chunk = list.slice(-5 , -3)

console.log(list , chunk)