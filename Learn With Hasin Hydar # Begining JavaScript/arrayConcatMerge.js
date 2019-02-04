

var list1 = [
"sun",
"mon",
"tue"
]

var list2 = [
"wed",
"thu",
"fri"
]

var list3 = [
"sat"]
// var list = list1.concat(list2).concat(list3)

// var list = list1.concat(list2 , list3)

var list = [].concat(list1 , list2 , list3)


console.log(list , list1 , list2 , list3)

