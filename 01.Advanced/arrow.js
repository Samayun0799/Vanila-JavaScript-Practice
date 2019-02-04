// const sayHello = function( name){
//   return `Hey there ${name} !`
// } 

// console.log(sayHello('Samayun Chowdhury'))


const sayHello = (name)=>{
	  return `Hey there ${name} !`
}

console.log(sayHello('Samayun Chowdhury'))


const todos = [
{
	title: 'ANgry Bird',
	isDone: true	
},
{
	title: 'Hello War',
	isDone: true
},
{
	title: 'Clash of clans',
	isDone: false
}
]


const thingDone = todos.filter(todo => todo.isDone == true)
console.log(thingDone)

const cameras = {
	price: 600,
	weight: 2000,
	myDes: ()=>{
		return `This canon camera is of ${this.price} `
	}
}

console.log(cameras.price)
console.log(cameras.myDes())

// for Redux Peple
// const func = ()=>({key: 'value'})