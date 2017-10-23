	var i = 500;//alto de la pagina
	var a = 0;
	$("#agre").on("click", function(){
		i = i + 50;//se incrementa la mantalla por cada vez que agrega una nueva cuenta
		a++;//se le agrega uno al id como identificador
		if(a<=10){
			$(".con3").val(a)
			$(".mcuenta3").html($(".mcuenta3").html() + "<label>Banco encargado de su tarjeta:</label><br><input type='text' id='Banco"+a+"' placeholder='Banco'><br> <label>Número de su tarjeta: </label><br><input type='text' id='Cuenta"+a+"' placeholder='# de Tarjeta'><br> <label>El saldo actual de su tarjeta</label><br><input type='text' id='sald"+a+"' placeholder='Saldo Actual'><br><label>Porcentaje de interes mensual</label><br><input type='text' id='Porcentaje"+a+"' placeholder='Porcentaje de interes'></br><label>Fehca de vencimiento de pago por mes:</label><br><input type='date' id='mensual"+a+"' placeholder='Fecha de vencimiento mensual'><br>");
			$(".mcuenta3").delay(function(e){
				e.fadeIn();
			},200)
			if ($(".mcuenta3") ) {}
			//d.getElementById('ventanaregistro').style.height = String(i+"px");
			$(".con3").css({height:String(i+"px")})
		}else 
			return false
	});