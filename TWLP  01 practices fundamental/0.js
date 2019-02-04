
var base64 = require('base-64');
var utf8 = require('utf8');

// var person = {
// 	firstname : "Salman",
// 	lastname : "Akash",
// 	age: 18,
// 	func: function () {
// 		return this.firstname +" "+ this.lastname
// 	}
// }


// console.log(person.func())
// console.log(person.age)

// for(i = 1 ; i<= 10 ; i++){
// 	console.log("2*"+i+" = "+i*2+"\n")
// }


// var color = ["red","green","blue"]

// for(var i in color){
// 	console.log(i, color[i])
// }

// var obj = {a:1,b:2,c:3}

// for(var j in obj){
// 	console.log(j, obj[j])
// }


function checkCoding(){
	var txt;
	var coding = document.getElementById('codeText').value

	switch(coding){

     case "java":
        txt = "I Love Java"
     	break;

     case "php":
        txt = "I Love PHP"
        break;

     case "js":
         txt = "I Love JavaScript"
     	break;

 	 default:
 	     txt = "I don't Love"


	}

	document.getElementById('show').innerHTML = txt
}

function checkCodingEvent(e){
	console.log(e)
	alert("hi")
}


// function liveProject(){
// 		var a = 200
// 		this.x = 300
// 		this.y=400
// 		this.z = function () {
// 			return this.x + this.y
// 		}
// 	}
// var lp = new liveProject()
// console.log(lp.x)
// console.log( lp.z())


// function totalNum(a , b){
//   this.x = a
//   this.y = b
//   this.sum = function(){
//   	return this.x + this.y
//   }
// }

// var ami = new totalNum(5,10)
// var summetion = ami.toString()
// console.log(summetion)

// var colors = ["green " ,"red"]
// colors.push("yellow")
// colors.unshift("zfirst")
// colors.sort()
// console.table(colors)


// Inheritencxe prototypal
/**
		function totalNum(a,b){
			this.x = a
			this.y = b
			this.sum = function(){
				return this.x + this.y
			}
		}
		function productNum(a,b){
			this.x = a
			this.y = b
			this.product = function(){
				return this.x * this.y
			}
		}

		totalNum.prototype = new productNum()
		productNum.prototype = new totalNum()


		var obj = new totalNum(10,5)
		var obj1 = new productNum(5,5)

		console.table(obj.product())
		console.table(obj1.sum())
*/

// PRIVATE AND PUBLIC

/*
		function totalNum(a){
		  // private
		  var x = 25
		  total = function(){
		  	return x + a
		  }
		  // public

		 this.result = function(){
		 	this.sum = total()
		 	return "Result is "+ this.sum
		 }

		}


		var tn = new totalNum(5)
		console.table(tn.result())

*/

function totalNum(a){
		  this.x = 25
		  this.y= function(){
		  	return this.x + this.x
		  }
		}
		totalNum.prototype.a = 200

	var tn = new totalNum(5)
	// console.table(tn.x)
	// console.table(tn.y())
	// console.table(tn.a)



// function $(selector){
// 	// this.selector = selector
//   return this.selector
// }

// $.prototype.value = this.selector

// var n = new $('#button')
// console.log(n.value) 	

// own func()

// function revMe(s){
// 	return s.split(" ").reverse().join().replace(/,/g,'')
// }
// var x = "A B C D"
// var rv = revMe(x)
// console.log(rv)

 String.prototype.revMe = function(){
	// use built in 
	// return this.split(" ").reverse().join().replace(/,/g,'')

	var s = ""
	var i = this.length
	while(i>0){
		s += this.substring(i-1 , i)
		i--
	}
   return s
}

var x = "A B C D"
console.log(x.revMe())



// var timeout;
// function timeoutTrigger(){
// 	console.log("THIS TIME OUT STARTED........")
// }

// function timeInit(){
// 	timeout = setTimeout(timeoutTrigger(), 1000);
// 	console.log("TIMEOUT has been started........................")
// }


// timeInit()




// var i = 0

// var x = setInterval(function(){
// 	i++
// 	alert("JS Fundamental")
// 	if (i == 4) {
// 		clearTimeout(x)
// 	}
// }
// 	,10)



//  for node js - clock

// clock()

function clock(){
	var date = new Date()

	var hour = date.getHours()
	var minute = date.getMinutes()
	var second = date.getSeconds()
	console.log(hour +":"+ minute +":"+ second)

	//  clock - for HTML
// document.getElementById('hour').innerHTML = hour
// document.getElementById('minute').innerHTML = minute
// document.getElementById('second').innerHTML = second
}
// setInterval(clock , 1000)




//  custom fade in fade ou


// var num = [1,2,3,4,5,6,7,8,9]

// var isExists = num.indexOf(5)

// if (isExists) {
//   console.log("Yes it\'s Exists")
// } else {
// 	 console.log("No it\'s not Exists")

// }


//  countdown and fade in/outs
//  hoisting
var value =  true
function myFunc(){

	if (!value) {

		var value = 200
	} 
	// // return value
	// console.log(value)
}

// myFunc()
// console.log(myFunc())
// console.log(value)


// 36

// var num1 =  Number('10')
// var num2 = 10
// console.log(typeof num1)
// console.log(typeof num2)
// console.log(num1 === num2)

// 37
	// var a = true //1
	// var b = false //0
	// var x= a+b //1
	// var y = 5-x //4
	// var result = y-x //4-1 //3

	// console.log(result)
// 38
var a = new String("liveProject")
var b =  String("liveProject")
// console.log("hm")
// console.log(a instanceof String)
// console.log(b instanceof String)
// console.log(a)
// console.log(b)

// 39
// console.log("======PART_39=========\n")

// function factorial(n){
// 	if (n==0) {
// 		return 1
// 	}else{
// 		product = 1
// 		for (var i = 1; i <= n ; i++) {
// 			product *= i
// 		}
// 		return product
// 	}
// }

function factorial(n){
	// if (n==0) {
	// 	return 1
	// }else{
	// 	return n*factorial(n-1)
	// }
	if (n==0) {return 1}

	return  n*factorial(n-1)
}

// console.log(factorial(5))
// console.log(factorial(0))

// 43 eval
	// var x = '2+2'
	// console.log(eval(x))

// 44


// var str = "TWLP"
// var esc_str = unescape(str)
// // escape
// // unescape

// console.log(esc_str)


// 45
// BASE 64 ENCODE DECODE


var str = "TWLP"
var b64 =  base64.decode(str)
// escape
// unescape

console.log(b64)

var encoded = 'Zm9vIMKpIGJhciDwnYyGIGJheg==';
var bytes = base64.decode(encoded);
var text = utf8.decode(bytes);
console.log(text);

var TWLP = "Samayun Chowdhury"
var encodedData = base64.encode(TWLP)
console.log(encodedData)

console.log(base64.decode(encodedData))


// 46

// RegEx -- Regular Expression

function emailValid(email){
	var re = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	return re.test(String(email).toLowerCase())
}
var str = "Samayungmail.com"
var isEmail = emailValid(str)

// console.log(isEmail)


//var re = /pattern/modifier;
var re  = /[x|y]/;
// var re = new RegExp()
// console.log(typeof re)


