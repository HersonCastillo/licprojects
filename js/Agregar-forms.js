	var i = 170;//alto de la pagina
	var a = 0;
	$("#agre").on("click", function(){
		i = i + 50;//se incrementa la mantalla por cada vez que agrega una nueva cuenta
		a++;//se le agrega uno al id como identificador
		if(a<=10){
			$(".con2").val(a)
			$("#contador").val(a)
			$(".mcuenta2").html($(".mcuenta2").html() + "<input type='text' id='Banco"+a+"' placeholder='Banco'> <input type='number' id='Cuenta"+a+"' placeholder='# de Cuenta'> <input type='number' id='sald"+a+"' placeholder='Saldo Actual'><br>");
			$(".mcuenta2").delay(function(e){
				e.fadeIn();
			},200)
			if ($(".mcuenta2") ) {}
			//$(".con2").object()[0].style.height = String(i+"px");
			$(".con2").css({height:"+="+String(i+"px")})
		}else 
			return false
	});