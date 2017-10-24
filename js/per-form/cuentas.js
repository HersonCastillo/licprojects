var info = MyInfo();

$Cuentas = JSON.parse(info.Cuentas);

var count = $Cuentas.length / 3;

for(var i = 0; i <= (count - 1); i++) $("#cue").append("Cuenta #" + parseInt(i + 1) + " <b>" + $Cuentas[i * 3] + " " + $Cuentas[ (i * 3) + 1 ] + "  $" + $Cuentas[(i * 3) + 2] + "</b><br>")

$("#ingre").on('click', function(){
	$Unico = [];

	$Count = $("#contador").val();

	if($Count == 0) alert('No hay cuentas que ingresar');
	else{
		for(var j = 1; j <= $Count; j++){
			$BA = $("#Banco" + j).val();
			$CA = $("#Cuenta" + j).val();
			$SA = $("#sald" + j).val();

			if($BA != "" && parseFloat($BA) != 0) $Unico.push($BA);
			if($CA != "" && parseFloat($CA) != 0) $Unico.push($CA);
			if($SA != "" && parseFloat($SA) != 0) $Unico.push($SA);
		}

		if($Unico.length >= 1){
			for(var i = 0; i <= ($Unico.length -1 ); i++) $Cuentas.push($Unico[i]);
			update = JSON.parse(DB.users);
			id = DB.getItem('log-in');
			for(var i = 0; i <= (update.length - 1); i++){
				if(update[i].NombreUsuario == id){
					$Cuentas = JSON.stringify($Cuentas);
					update[i].Cuentas = $Cuentas;
					DB.users = JSON.stringify(update);
					alert("Cuenta agregada exitosamente");
					break;
				}
			}
			location.reload();
		}else alert('No hay cuentas que ingresar');
	}
})