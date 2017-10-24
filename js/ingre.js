function detector() {
	var formulario = document.getElementById('form');
	for (var i = 0; i < formulario.chk.length; i++) if (formulario.chk[i].checked) break;
	return i;
}
var formulario = document.getElementById('form').onchange = function(){
	detector();
	if (detector() == 1) {
		document.getElementById('aho1').style.display = "block";
		document.getElementById('tar1').style.display = "none";
	}else if(detector() == 2){
		document.getElementById('aho1').style.display = "none";
		document.getElementById('tar1').style.display = "block";
	}else{
		document.getElementById('aho1').style.display = "none";
		document.getElementById('tar1').style.display = "none";
	}
}