const myPElement = document.querySelectorAll('.classone')
console.log(myPElement[0])

var colorConsole = {
colorBlack: 'background: #000; color: #fff;font-size:20px;'
}


// const myPElement = document.querySelector('p')
// myPElement.textContent= 'I am being changed using JS'

const myPElement = document.querySelectorAll('p')
myPElement.forEach((data)=>{
	data.textContent = "I am changed by JS"
})

console.log('%c Developer Samayun Chowdhury',colorConsole.colorBlack);


const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via JS'

document.querySelector('body').addEventListener('click',(event)=>{
	console.dir(event.target.textContent)
	 event.target.textContent = "I was Clicked"
})




