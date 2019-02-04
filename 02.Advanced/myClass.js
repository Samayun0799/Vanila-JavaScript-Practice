class User{
  constructor(firstname , lastname , credits){
  this.firstname = firstname
	this.lastname = lastname
	this.credits = credits
  }
  getFullName (){
  	 return  `${this.firstname} ${this.lastname} is my fullname`

  }
  editName(newname){
     const myname = newname.split(' ')
     this.firstname = myname[0]
     this.lastname = myname[1]
     // take a middle name too
  }
}

class Teacher extends User{
 constructor(firstname , lastname , credits, subject){
 	super(firstname , lastname , credits);
 	this.subject = subject
 }
 getFullName(){
 	return  `${this.firstname} ${this.lastname} is my fullname and I teach ${this.subject}`
 }
 favDrink(name){
 	console.log(`My favourite name is  ${name}`)
 }
}


const john = new Teacher('John' , 'Anderson' , 34 , "Python")
console.log(john.getFullName())

john.editName("JOHN Doe")
console.log(john.getFullName())


const Sammy = new User('Sammy' , 'Chowdhury' )
console.log(Sammy.getFullName())


john.favDrink("Milk")