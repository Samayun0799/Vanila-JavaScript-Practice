var list = [
	"sat",
	"sun",
	 "mon", //-5
	"tue",
	"wed",//-3
	"thu",
	"fri"
]


// var list2  = list
// list2[6] = "Holiday"

// list[1] = "Changed"
// console.log(list , list2)


// var v1  = 1
// var v2 = v1
// v1 = 2
// // shallow copy
// // deep copy
// console.log(v1 , v2)



// copy by slice in js array
var list2 = list.slice()
// slice in modern Javascript
// var list2 = [...list]
// old Javascript copy from array
 // var list[2] = Array.from(list)
list2[1] = "No Day"
console.log(list , list2)

