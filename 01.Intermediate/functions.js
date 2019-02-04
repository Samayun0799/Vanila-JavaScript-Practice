let sayHello = function (name) {
	console.log("Greeting message for user...")
	console.log(`Hey ${name}`)
}

let name = 'John'

sayHello('Salman Akash')



let fullNameMaker = function(firstname , lastname){
	console.log('Welcome to LCD')
	console.log(`Happy to have you . ${firstname} ${lastname}`)
}

fullNameMaker('John' , 'Doe')


let myAdder = function(num1 , num2){
   let added = num1+ " "+num2
   return added
}

console.log(myAdder('Salman','Akash'))