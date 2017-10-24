var i = 500;//alto de la pagina
var a = 0;
$("#agre").on("click", function(){
	i = i + 50;//se incrementa la mantalla por cada vez que agrega una nueva cuenta
	a++;//se le agrega uno al id como identificador
	if(a<=10){
		$("#count").val(a)
		$("#mcuenta").html($("#mcuenta").html() + "<input type='text' id='Banco"+a+"' placeholder='Banco'> <input type='number' id='Cuenta"+a+"' placeholder='# de Cuenta'> <input type='number' id='sald"+a+"' placeholder='Saldo Actual'><br>");
		//d.getElementById('ventanaregistro').style.height = String(i+"px");
		$("#ventanaregistro").css({height:String(i+"px")})
	}else 
		return false
});
