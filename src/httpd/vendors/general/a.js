

var i=1;
var innerDom = document.getElementsByClassName('innerText');
var text1 = "The firmware version must be 3.105 or newer";
var text2 = "The firmware version must be 3.105 or newer. Any older or third party firmware may brick this device!";
if (i==1) {
	
	innerDom[0].innerHTML = text1;
	innerDom[1].innerHTML = text2;
}

else innerDom.remove()

