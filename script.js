let textbox = document.querySelector("#textbox");
let button = document.querySelector("#btn");

button.addEventListener("click", function(){
	//alert();
	localStorage.name = textbox.value;
});
document.write(localStorage.name);