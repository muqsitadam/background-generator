var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//Set colors to match when page loads
window.onload = function() {
	color1.value = "#ff0000";
	color2.value = "#ffff00";
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function addButton(){
	var randomButton = document.createElement('button');
	randomButton.appendChild(document.createTextNode('Random Colours'))
	randomButton.setAttribute("class", "button")
	body.appendChild(randomButton);

	randomButton.onclick = function(){
		var random1 = "#" + Math.floor(Math.random()*16777215).toString(16);
		var random2 = "#" + Math.floor(Math.random()*16777215).toString(16);

		body.style.background =
	"linear-gradient(to right, "
	+ random1
	+ ", "
	+ random2
	+ ")";
	css.textContent = body.style.background + ";";

	color1.value = random1
	color2.value = random2
	}
}addButton();



function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);