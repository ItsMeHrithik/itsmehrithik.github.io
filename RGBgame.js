var colors = randomColorArray(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickRandom();
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var rgbUpdate = document.getElementById("rgbUpdate");
var easyButton = document.getElementById("easyButton");
var hardButton = document.getElementById("hardButton");
rgbUpdate.textContent = pickedColor;

for(var i = 0 ;i<squares.length;i++) {
	//add intial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//to grab color of clicke squares 
		//use this.style.backgroundColor
		if(this.style.backgroundColor === pickedColor) {
			//call the changeColor function 
			//pass the current color using this.style.backgroundColor
			changeColor(this.style.backgroundColor);
			message.textContent = "CORRECT";
			resetButton.textContent = "Play Again";
		} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "TRY AGAIN";
			resetButton.textContent = "Reset";
		}
	})
}

easyButton.addEventListener("click", function(){
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	colors = randomColorArray(3);
	pickedColor = pickRandom();
	for(var i=0;i<squares.length;i++){
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click", function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	colors = randomColorArray(6);
	pickedColor = pickRandom();
	for(var i=0;i<squares.length;i++){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	}

});

resetButton.addEventListener("click", function() {
	//generate all new colors
	if(colors.length == 6) {
		colors = randomColorArray(6);
	} else if (colors.length == 3) {
		colors = randomColorArray(3);
	}
	//pick a new random color from array
	pickedColor = pickRandom();
	rgbUpdate.textContent = pickedColor;
	//change color of squares
	for(var i = 0 ;i<squares.length;i++) {
		//add intial colors to squares
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	message.textContent = "";


})
function changeColor(color) {
	for(var j = 0 ;j<squares.length;j++) {
				squares[j].style.backgroundColor = pickedColor;
	}
	h1.style.backgroundColor = color;
}

function pickRandom() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColorArray(num) {
	//create the array
	var arr = [];
	//add rgb in array
	for(var i = 0 ;i <num;i++) {
		arr.push(randomRGBGenerator());
	}
	//return array
	return arr;
}

function randomRGBGenerator() {
	var red = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	//"rgb(x ,y ,z)"
	var rgbString = "rgb("+red+", "+blue+", "+green+")"
	return rgbString;
}