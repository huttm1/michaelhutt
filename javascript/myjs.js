
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