let userEmail = '     sAmayu1234n@gmail.com     '

let password = '123455555'

let userChecker = function (myString) {
   if (myString.includes(123) && (myString.length > 6) ){
        return true
   }

 	return false

}

let passChecker = function(pass){
     if (pass.includes('') && (pass.length > 8) ) {
     	return true
     }
     return false
}


console.log(password.length)
console.log(userEmail.toLowerCase().trim())
console.log(userChecker(userEmail))
console.log(passChecker(password))