var DB = localStorage;

$(w).ready(function(){

	var status = DB.getItem("inicializate");
	if(status !== "true") location.href = "registro.html";

	$("#ing").on("click", function(){
		$Username = $("#username").val();

		var uss = DB.getItem("users");
		var $NumRep = false;
		if(uss != null && uss != ""){
			var dd = DB.getItem("users");
			var njson = JSON.parse(dd);
			for(var na = 0; na <= (njson.length - 1); na++) if($Username == njson[na].NombreUsuario) $NumRep = true;
		}

		if($NumRep) alert('El nombre de usuario que esta intentando ingresar ya existe');
		else{
			$Efectivo = $("#efectivo").val();

			$BancoDefecto = $("#Banco").val();
			$CuentaDefecto = $("#Cuenta").val();
			$SaldoDefecto = $("#sald").val();

			$BancoAux = [];
			$CuentaAux = $BancoAux;
			$SaldoAux = $CuentaAux;

			$Count = $("#count").val();

			if(	Vald($Username) &&
				NumVal($Efectivo) &&
				Vald($BancoDefecto) &&
				NumVal($CuentaDefecto) &&
				NumVal($SaldoDefecto)
			){

				$BancoAux.push($BancoDefecto);
				$CuentaAux.push($CuentaDefecto);
				$SaldoAux.push($SaldoDefecto);

				for(var j = 1; j <= $Count; j++){
					$BA = $("#Banco" + j).val();
					$CA = $("#Cuenta" + j).val();
					$SA = $("#sald" + j).val();

					if($BA != "" && parseFloat($BA) != 0) $BancoAux.push($BA);
					if($CA != "" && parseFloat($CA) != 0) $CuentaAux.push($CA);
					if($SA != "" && parseFloat($SA) != 0) $SaldoAux.push($SA);
				}
				var Usuario = {
					NombreUsuario: $Username,
					InfoUser: DB.getItem("pre-aux-reg"),
					/*Bancos: JSON.stringify($BancoAux),*/
					Cuentas: JSON.stringify($CuentaAux),
					/*Saldos: JSON.stringify($SaldoAux),*/
					Ingresos: [],
					Gastos: [],
					Tarjetas: [],
					Efectivo: $Efectivo,
					Cobro: "Efectivo",
					AvisoMinimo: 10 
				};

				if(DB.getItem("users") != null && DB.getItem("users") != ""){
					var data = DB.getItem("users");
					var newjson = JSON.parse(data);
					newjson.push(Usuario);
					DB.setItem("users", JSON.stringify(newjson));
				}else DB.setItem("users", JSON.stringify([Usuario]));

				DB.setItem("pre-aux-reg", "");
				DB.setItem("log-in", $Username);
				DB.setItem("inicializate", "stable");
				
				location.href = "usuario.html";
			}else alert('Hay datos que rellenar o algún dato no es válido.');
		}
	})
})