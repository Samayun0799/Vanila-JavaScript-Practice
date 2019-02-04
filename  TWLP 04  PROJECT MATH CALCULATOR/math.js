var showresult = document.querySelector('#showresult')
var getValue = document.querySelector('#getValue')
function calclate(process) {
	with(document.frm){

	}
	switch(process){
		case 1:
		  showresult.value = Math.abs(getValue.value)
		  break;
		case 2:
		  showresult.value = Math.round(getValue.value)
		  break;
		case 3:
		  showresult.value = Math.sin(getValue.value)
		  break;
		case 4:
		  showresult.value = Math.cos(getValue.value)
		  break;
		case 5:
		  showresult.value = Math.tan(getValue.value)
		  break;
		case 6:
		  showresult.value = Math.log(getValue.value)
		  break;
		case 7:
		  showresult.value = Math.floor(getValue.value)
		  break;
		case 8:
		  showresult.value = Math.ceil(getValue.value)
		  break;
		case 9:
		  alert(Math.max(getValue.value , prompt("Enter Number", '0'))+ ' is greater than number')


		  break;
		case 10:
		 alert(Math.min(getValue.value , prompt("Enter Number", '0'))+ ' is smaller than number')
		  break;

		case 11:
		  showresult.value = Math.sqrt(getValue.value)
			  // alert(Math.max(getValue.value , prompt("Enter a number ", '0'))+ ' is greater than the number')
		  break;


		case 12:
		  showresult.value = Math.random()
		  break;
		case 13:
		  showresult.value = Math.E(getValue.value)
		  break;
		case 14:
		  showresult.value = Math.PI
		  break;


	}
}

function getNumber(){
	var getString = document.getElementById('getRegValue').value
	var result = getString.match(/\d+/g)
		if (result != null) {

			for (var i = 0; i < result.length; i++){
		      	document.getElementById('regexOutput').value += result[i]+"\n"
			}

		}
}

// txt = document.getElementById('str').textContent


function validateEmail(){
	var getEmail = document.getElementById('email')
	var email = getEmail.value

	var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	getEmail.style.backgroundColor = "white"
	if (emailRegExp.test(email)) {
getEmail.style.backgroundColor = "green"
	} else {
getEmail.style.backgroundColor = "red"
	}


}