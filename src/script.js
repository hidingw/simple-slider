var images = 
	["images/tea.jpg",
	 "images/coffee.jpg",
	 "images/tobacco.jpg"];

var buttonBackward = document.getElementById("backward");
var buttonForward = document.getElementById("forward");
var myImage = document.getElementById("slider");
var i = 0;

function getImage(){
	myImage.style.background = "url('"+images[i]+"') no-repeat";
	myImage.style.backgroundSize = "cover";
};

document.addEventListener("DOMContentLoaded", getImage);

var autoTimer = setInterval(function() {
	(i < images.length-1) ? i++ : i=0;
	getImage();
}, 3500);

myImage.onmouseover = function() {
	clearInterval(autoTimer);
};

myImage.onmouseout = function() {
	autoTimer = setInterval(function() {
	(i < images.length-1) ? i++ : i=0;
	getImage();
	}, 3500);
};

buttonForward.onclick = function() {
	(i < images.length-1) ? i++ : i=0;
	getImage();
};

buttonBackward.onclick = function() {
	(i > 0) ? i-- : (i = images.length-1);
	getImage();
};