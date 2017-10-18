//pantalla modal para la recuperacion de contraseña
function mostrarc(valor){
	$("#bgventanac").css({visibility: valor});
}
//pantalla modal para mostrar el efectivo
$("#ef").on("click", function(){ 
	$(".efec").css({display: "block"})
 });
//muestra la cuenta
$("#cu").on("click", function(){ 
	$(".efec").css({display: "block"})
 });

var i = 500;//alto de la pagina
var a = 0;
$("#agre").on("click", function(){
	i = i + 50;//se incrementa la mantalla por cada vez que agrega una nueva cuenta
	a++;//se le agrega uno al id como identificador
	if(a<=10){
		$("#count").val(a)
		$("#mcuenta").html($("#mcuenta").html() + "<input type='text' id='Banco"+a+"' placeholder='Banco'> <input type='text' id='Cuenta"+a+"' placeholder='# de Cuenta'> <input type='text' id='sald"+a+"' placeholder='Saldo Actual'><br>");
		d.getElementById('ventanaregistro').style.height = String(i+"px");
	}else 
		return false
});

