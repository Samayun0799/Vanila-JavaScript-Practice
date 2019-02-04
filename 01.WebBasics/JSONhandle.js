const student  = {
	name: "John",
	age: 23,
	isActive: true
}

// convert into a string to be stored in localstorage

const studentObjectToString = JSON.stringify(student)
console.log(typeof studentObjectToString)

// localStorage.setItem('student' , studentObjectToString)


const toJSONObject = JSON.parse(studentObjectToString)
console.log(typeof toJSONObject)
console.log(toJSONObject)
console.log(toJSONObject.name)
