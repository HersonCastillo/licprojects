function mostrar(valor){
	$("#bgventana").css({visibility: valor})
}
function mostrarc(valor){
	$("#bgventanac").css({visibility: valor});
}
$("#ef").on("click", function(){ 
	$(".efec").css({display: "block"})
 });
var i = 500;//alto de la pagina
var a = 0;
$("#agre").on("click", function(){
	i = i + 50;
	a++;
	$("#count").val(a)
	$("#mcuenta").html($("#mcuenta").html() + "<input type='text' id='Banco"+a+"' placeholder='Banco'> <input type='text' id='Cuenta"+a+"' placeholder='# de Cuenta'> <input type='text' id='sald"+a+"' placeholder='Saldo Actual'><br>");
	d.getElementById('ventanaregistro').style.height = String(i+"px");
});
