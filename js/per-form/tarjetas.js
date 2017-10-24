var info = MyInfo();

var tarjeta = info.Tarjetas;

if(tarjeta.length >= 1) for(var i = 0; i<=(tarjeta.length - 1); i++) $("#cue").append("<li>Tarjeta #" + parseInt(i+1) +" <b>" + tarjeta[i].Banco +"</b> <i>" + tarjeta[i].Tarjeta +"</i> <b>-$</b>" + tarjeta[i].Saldo +"</li>");
else $("#cue").html("No posees tarjetas");

$("#mete").on('click', function(){
	$Banco = $("#Banco").val();
	$NumTarjeta = $("#Cuenta").val();
	$Saldo = $("#Saldo").val();
	$PorcentajeInteres = $("#Porcentaje").val();
	$PagoPorMes = $("#mensual").val();
	//Validar entradas
	if(	$Banco.length >= 1 &&
		!isNaN($NumTarjeta) &&
		!isNaN($Saldo) &&
		!isNaN($PorcentajeInteres) &&
		$PagoPorMes.length >= 1
	){
		$New = {
			Banco: $Banco,
			Tarjeta: $NumTarjeta,
			Saldo: $Saldo,
			Porcentaje: $PorcentajeInteres,
			FechaPagoMensual: $PagoPorMes
		};
		update = JSON.parse(DB.users);
		id = DB.getItem('log-in');
		for(var i = 0; i <= (update.length - 1); i++){
			if(update[i].NombreUsuario == id){
				update[i].Tarjetas.push($New);
				DB.users = JSON.stringify(update);
				break;
			}
		}
		alert('Tarjeta agregada exitosamente');
		location.reload();
	}else alert('Algún campo posee un valor no válido');
})
