if (!("ontouchstart" in document.documentElement)) {
document.documentElement.className += "no-touch";
}
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8
		});
}
function codeAddress(){
	var name = document.getElementById('address');
	alert("Hello, "+name.value + ".\n It is so nice to meet you!");
}

function checkNav() {
	if (document.getElementById("mySubmenu").style.display=="none"){
		document.getElementById("mySubmenu").style.display= "block";
	}
	else if (document.getElementById("mySubmenu").style.display=="block"){
	document.getElementById("mySubmenu").style.display= "none";
	}
	else{
		document.getElementById("mySubmenu").style.display= "block";
	}
}

function openNav() {
		document.getElementById("mySubmenu").style.display= "block";	
}

function closeNav() {
	
	document.getElementById("mySubmenu").style.display= "none";
}

