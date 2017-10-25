var info = MyInfo();

$("#efectivo-val").on('change', function(){
	if(this.checked) $("#cuenta").attr("disabled", true);
	else $("#cuenta").object().removeAttribute("disabled");
})
$("#ingre").on('click', function(){
	$FechaIngreso = $("#men").val();
	$Motivo = $("#motivo").val();
	$Monto = $("#monto").val();

	$Tipo = $("#efectivo-val").object().checked;

	if(	$FechaIngreso.length >= 1 && !isNaN($Monto) && $Monto >= 1 && $Motivo.length >= 1){
		if($Tipo){
			$Ingreso = {
				Fecha: $FechaIngreso,
				Motivo: $Motivo,
				Monto: $Monto,
				Tipo: "Efectivo"
			};
			update = JSON.parse(DB.users);
			id = DB.getItem('log-in');
			for(var i = 0; i <= (update.length - 1); i++){
				if(update[i].NombreUsuario == id){
					update[i].Ingresos.push($Ingreso);
					update[i].Efectivo = parseFloat(parseFloat(update[i].Efectivo) + parseFloat($Monto));
					DB.users = JSON.stringify(update);
					alert('Ingreso almacenado con éxito.');
					location.reload();
					break;
				}
			}
		}else{
			$Cuenta = $("#cuenta").val();
			if($Cuenta.length >= 1){
				cuentas = JSON.parse(info.Cuentas);
				_count = cuentas.length / 3;
				stats = false;
				for(var j = 0; j <= (_count - 1); j++){
					if($Cuenta == cuentas[3 * j]){
						stats = true;
						cuentas[(3 * j) + 2] = (parseFloat(parseFloat(cuentas[(3 * j) + 2])+parseFloat($Monto))).toString();
						break;
					}
				}
				if(stats){
					$Ingreso = {
						Fecha: $FechaIngreso,
						Motivo: $Motivo,
						Monto: $Monto,
						Tipo: ("Cuenta: " + $Cuenta)
					};
					update = JSON.parse(DB.users);
					id = DB.getItem('log-in');
					for(var i = 0; i <= (update.length - 1); i++){
						if(update[i].NombreUsuario == id){
							update[i].Ingresos.push($Ingreso);
							update[i].Cuentas = JSON.stringify(cuentas);
							DB.users = JSON.stringify(update);
							alert('Ingreso almacenado con éxito.');
							location.reload();
							break;
						}
					}
				}else alert('No se encontró la cuenta');
			}else alert('Se requiere una cuenta');
		}
	}else alert('Faltan llenar algunos campos.');
})