function mostrar(valor){
	$("#bgventana").css({visibility: valor})
}
function mostrarc(valor){
	$("#bgventanac").css({visibility: valor});
}
var i = 500;//alto de la pagina
var a = 0;
$("#agre").on("click", function(){
	i = i + 50;
	a++;
	$("#count").val(a)
	$("#mcuenta").html($("#mcuenta").html() + "<input type='text' name='Banco"+a+"' placeholder='Banco'> <input type='text' name='Cuenta"+a+"' placeholder='# de Cuenta'> <input type='text' name='sald"+a+"' placeholder='Saldo Actual'><br>");
	d.getElementById('ventanaregistro').style.height = String(i+"px");
});
$("#ing").on("click", function(){
	$(".contenido").css({visibility: "hidden"});
	$(".container").css({visibility: "hidden"});
	$("#ventanaregistro").css({display: "none"});
	$(".conta").css({visibility: "visible"});
	$(".cabe").css({display: "block"});
	return false;
})
