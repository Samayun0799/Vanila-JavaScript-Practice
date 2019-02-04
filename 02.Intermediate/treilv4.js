const myTodos = ['Buy Bread' , 'Go to Gym', 'Record youtube videos']

console.table(myTodos.indexOf('Buy Bread'))


const newTodos = [
{
	title: 'Buy Bread',
	isDone: false
},
{
	title: 'Go to Gym',
	isDone: true
},
{
	title: 'Record YouTube ',
	isDone: true
}
]

const index = newTodos.findIndex(function(todo , index){
	console.log(todo)
  return todo.title === 'Buy Bread'
})


console.log(index)

const  findTodo = function(myTodos, title){
	const index = myTodos.findIndex(function(todo, index){
		return todo.title.toLowerCase() === title.toLowerCase()

	})

	return myTodos[index]
}


let printMe = findTodo(newTodos, 'Go to Gym')
// console.log(printMe)




const findNewTodo = function(myTodos , title){
	const titleReturned = myTodos.find(function(todo , index){
        return todo.title.toLowerCase() == title.toLowerCase()
	})

	return titleReturned
}


const printNewMe = findTodo(newTodos , 'Go to gym')

console.log(printNewMe)