// var btn = document.querySelector('#button')
// var myForm = document.querySelector('#myform')



// function basicValidation() {
// 	if (isNaN(myValue) || myValue<1 || myValue>20) {
// 	console.log('NOT a valid input')
// }
// else {
// 	console.log('this input is OK')
// }

// }

// form validation


// myForm.addEventListener('submit',(event)=>{
// 	console.log('hi')
// })
var validateForm = document.querySelector('.validateForm')
validateForm.addEventListener('submit', (event)=>{
    event.preventDefault()
	console.log(event.target.username.value)
	console.log(event.target.realname.value)
	event.target.username.value = ""
	event.target.realname.value= ""
})