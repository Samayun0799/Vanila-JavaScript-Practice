let isVerified = false
let isLoggedIn  = true
let hasPaymentToken = false
let isGuest = false

if (isVerified && isLoggedIn && hasPaymentToken) {
	console.log('Greeting message to user ')
	console.log('Grant Access to paid course')
} else if(isVerified || isGuest){
	console.log('Allow free previews')
}
else{
	console.log('MESSAGE: please contact admin')
}