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
})
var i = 500;
$("#agre").on("click", function(){
	i = i + 50;
	document.getElementById('mcuenta').innerHTML += "<input type='text' name'efectivo' placeholder='Efectivo'> <input type='text' name='efectivo' placeholder='Efectivo'> <input type='text' name='efectivo' placeholder='Efectivo'><br>";
	document.getElementById('ventanaregistro').style.height = String(i+"px");
});
window.onload = function(){
	document.querySelector('.b').addEventListener('click', function(){
		document.querySelector('.conta').classList.toggle('invisible');
		this.classList.toggle('mif-chevron-right');
	});
}
$("#ing").on("click", function(){
	$(".contenido").css({visibility: "hidden"});
	$(".container").css({visibility: "hidden"});
	$("#ventanaregistro").css({visibility: "hidden"});
	$(".conta").css({visibility: "visible"});
	$(".cabe").css({display: "block"});
})