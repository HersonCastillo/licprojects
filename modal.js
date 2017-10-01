function mostrar(valor){
	$("#bgventana").css({visibility: valor})
}
function mostrarc(valor){
	$("#bgventanac").css({visibility: valor});
}
$("#boton").on("click", function(){
	$("#ventanaregistro").css({visibility: "visible"});
	$(".container").css({visibility: "hidden"});
	$("#bgventana").css({visibility: "hidden"});
	return false;
})
var i = 500;
$("#agre").on("click", function(){
	i = i + 50;
	document.getElementById('mcuenta').innerHTML += "<input type='text' name'efectivo' placeholder='Efectivo'> <input type='text' name='efectivo' placeholder='Efectivo'> <input type='text' name='efectivo' placeholder='Efectivo'><br>";
	document.getElementById('ventanaregistro').style.height = String(i+"px");
});
$("#ing").on("click", function(){
	$(".contenido").css({visibility: "hidden"});
	$(".container").css({visibility: "hidden"});
	$("#ventanaregistro").css({display: "none"});
	$(".conta").css({visibility: "visible"});
	$(".cabe").css({display: "block"});
	return false;
})
