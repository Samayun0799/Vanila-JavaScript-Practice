

class Library{

	// this.show = function(){
	// 	this.style.display = "block"
	// }
	this.hide = function () {
		this.style.display = "none"
	}
	this.html = function(html){
		this.innerHTML = html
	}
	this.text = function(text){
		this.textContent = text
	}

}

function $(doc){
   document.querySelectorAll(doc)
}



var DOM = new Library();
$('h2').DOM.text("hello")