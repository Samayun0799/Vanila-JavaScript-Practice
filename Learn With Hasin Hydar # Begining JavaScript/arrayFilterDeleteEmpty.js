// Delete empty array
	var list = [
	"sun",
	NaN,
	"mon",
	"tue",
	"wed",
	"thu",
	undefined,
	null,
	"fri",
	,
	"sat"
	]
	console.log(list)

	var newList = []
	// for (i in list) {
	// 	if (list[i]) {
	// 		newList.push(list[i])
	// 	}
	// }
	newList = list.filter(Boolean)
	console.log(newList)

