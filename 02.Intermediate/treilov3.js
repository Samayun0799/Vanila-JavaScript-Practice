
let myTodos = {
	day: 'Monday',
	meetings: 0,
	meetDone : 0,
	addMeeting: function(num){
       this.meetings = this.meetings + num
     },
     summary : function(){
     	return `You have ${this.meetings} have today`
     }
}

myTodos.addMeeting(4)
console.log(myTodos.summary())
console.log(myTodos)
// Assignment
// Middle Meeting Done !!