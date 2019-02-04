/*
	var h = document.createElement('h1')
	var myValue = document.createTextNode('Hello world')
	h.appendChild(myValue)
	document.querySelector('h1').appendChild(h)
*/


var val = 5

while(val > 0){
	 val--
  console.log(val)

}

// var removedItem = function () {
// 	alert("")
// }


// instances

var ul = document.getElementById('list')
var li;

var addBtn = document.getElementById('add')
var removeBtn = document.getElementById('remove')

addBtn.addEventListener('click', addItem)
removeBtn.addEventListener('click' , removedItem)


function removedItem() {
		li = ul.children
		for (var i = 0; i < li.length; i++) {
			while(li[i] && li[i].children[0].checked){
				ul.removeChild(li[i])
        localStorage.removedItem(item)
			}
		}
}


function addItem(){
	var input = document.getElementById('input')
    var item = input.value

    localStorage.setItem(item,item)
    
    ul = document.getElementById('list')
    var textNode = document.createTextNode(item)

    if (item === '') {
    	return false
    	// add a p tag assign a value of Enter your todo

    } else {
    	// create li
        li = document.createElement('li')

       // create checkbox
        var checkbox = document.createElement('input')
	     checkbox.type = 'checkbox'
	     checkbox.setAttribute('id', 'check')

       // create label
       var label = document.createElement('label')
       label.setAttribute('for' , 'item') //optional

       // add these on webpage

       ul.appendChild(label)
       li.appendChild(checkbox)
       label.appendChild(textNode)

       li.appendChild(label)
       ul.insertBefore(li , ul.childNodes[0])
       li.className = 'visual'

       setTimeout(()=>{
       	 li.className = 'visual'
       },2)
      input.value = ""
    }

}

