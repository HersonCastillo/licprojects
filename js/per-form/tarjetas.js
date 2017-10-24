var info = MyInfo();

var tarjeta = info.Tarjetas;

if(tarjeta.length >= 1){

}else $("#cue").html("No posees tarjetas");

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

		alert('Tarjeta agregada exitosamente');
	}else alert('Algún campo posee un valor no válido');
})
