const days = ['Mon' , "Tue" , "Wed" , "Thr" , "Fri" , "Sat"]

// days.forEach(function (day , index) {
// 	console.table(`Starts with ${index+1} -- ${day}`)
// })

let length = days.length-1
// Traversing By For Loop

for (let index = 0; index <length+1; index++) {
	console.table(days[index])
}

//  Reverse Traversing
console.log('\n')

for (let index = length ; index >=0; index--) {
	console.table(days[index])
}