var info = MyInfo();
var selected = null;

gastos = info.Gastos;

if(gastos.length >= 1){
	for(var j = 0; j <=(gastos.length - 1); j++) $("#gas").append("<li>#"+(j+1)+" <b>"+gastos[j].Motivo+"</b> - "+gastos[j].Tipo+" - $<span>"+gastos[j].Monto+"</span></li>");
}else $("#gas").html("<small>No tienes gastos por el momento</small>")

$("#ingre").on('click', function(){
	$FechaIngreso = $("#men").val();
	$Motivo = $("#motivo").val();
	$Monto = $("#monto").val();

	if($FechaIngreso.length >= 1 && $Motivo.length >= 1 && !isNaN($Monto) && $Monto >= 1){
		switch(selected){
			case 'efectivo':{
				$Gasto = {
					Fecha: $FechaIngreso,
					Motivo: $Motivo,
					Monto: $Monto,
					Tipo: "Efectivo"
				};
				update = JSON.parse(DB.users);
				id = DB.getItem('log-in');
				for(var i = 0; i <= (update.length - 1); i++){
					if(update[i].NombreUsuario == id){
						update[i].Gastos.push($Gasto);
						update[i].Efectivo = parseFloat(parseFloat(update[i].Efectivo) - parseFloat($Monto));
						DB.users = JSON.stringify(update);
						alert('Gasto almacenado con éxito.');
						location.reload();
						break;
					}
				}
				break;
			}
			case 'cuenta':{
				$Cuenta = $("#cuenta-val").val();
				if($Cuenta.length >= 1){
					cuentas = JSON.parse(info.Cuentas);
					_count = cuentas.length / 3;
					stats = false;
					for(var j = 0; j <= (_count - 1); j++){
						if($Cuenta == cuentas[3 * j]){
							stats = true;
							cuentas[(3 * j) + 2] = (parseFloat(parseFloat(cuentas[(3 * j) + 2])-parseFloat($Monto))).toString();
							break;
						}
					}
					if(stats){
						$Gasto = {
							Fecha: $FechaIngreso,
							Motivo: $Motivo,
							Monto: $Monto,
							Tipo: ("Cuenta: " + $Cuenta)
						};
						update = JSON.parse(DB.users);
						id = DB.getItem('log-in');
						for(var i = 0; i <= (update.length - 1); i++){
							if(update[i].NombreUsuario == id){
								update[i].Gastos.push($Gasto);
								update[i].Cuentas = JSON.stringify(cuentas);
								DB.users = JSON.stringify(update);
								alert('Gasto almacenado con éxito.');
								location.reload();
								break;
							}
						}
					}else alert('No se encontró la cuenta');
				}else alert('Se requiere una cuenta');
				break;
			}
			case 'tarjeta':{
				$Tarjeta = $("#tarjeta-val").val();
				if(!isNaN($Tarjeta) && $Tarjeta >= 1){
					cuentas = info.Tarjetas;
					_count = cuentas.length
					stats = false;
					for(var j = 0; j <= (_count - 1); j++){
						if($Tarjeta == cuentas[j].Tarjeta){
							stats = true;
							cuentas[j].Saldo = (parseFloat(parseFloat(cuentas[j].Saldo)-parseFloat($Monto))).toString();
							break;
						}
					}
					if(stats){
						$Gasto = {
							Fecha: $FechaIngreso,
							Motivo: $Motivo,
							Monto: $Monto,
							Tipo: ("Cuenta: " + $Tarjeta)
						};
						update = JSON.parse(DB.users);
						id = DB.getItem('log-in');
						for(var i = 0; i <= (update.length - 1); i++){
							if(update[i].NombreUsuario == id){
								update[i].Gastos.push($Gasto);
								update[i].Tarjetas = cuentas;
								DB.users = JSON.stringify(update);
								alert('Gasto almacenado con éxito.');
								location.reload();
								break;
							}
						}
					}else alert('No se encontró la tarjeta');
				}else alert('Se requiere una cuenta');
				break;
			}
			default:{break}
		}
	}else alert('Faltan algunos campos por llenar');

})

$("#efectivo-val").on('change', function(){
	if(this.checked){
		$("#cuenta-val").attr("disabled", "");
		$("#tarjeta-val").attr("disabled", "");
		$("#tarjeta-val").object().value = "";
		$("#cuenta-val").object().value = "";
		selected = "efectivo";
	}else{
		$("#cuenta-val").object().removeAttribute("disabled");
		$("#tarjeta-val").object().removeAttribute("disabled");
	}
})
$("#cuenta-val").on('keyup', function(){
	if(this.value.length >= 1) $("#tarjeta-val").object().value = "";
	selected = "cuenta";
})
$("#tarjeta-val").on('keyup', function(){
	if(this.value.length >= 1) $("#cuenta-val").object().value = "";
	selected = "tarjeta";
})