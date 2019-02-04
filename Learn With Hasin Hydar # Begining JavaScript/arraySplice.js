var list = [
	"sat",
	"sun",
	 "mon", //-5
	"tue",
	"wed",//-3
	"thu",
	"fri"
]


// var chunk = list.splice(1 ,3)
// var chunk = list.splice(1 ,4)
var chunk = list.splice(-4 , 3)
console.log(list , chunk)