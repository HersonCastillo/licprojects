var DB = localStorage;

$(w).ready(function(){
	$("#ing").on("click", function(){
		$Username = $("#username").val();
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

				$BancoAux.push($BA);
				$CuentaAux.push($CA);
				$SaldoAux.push($SA);
			}
			Usuario.push({
				id: UsuarioNumber++,
				NombreUsuario: $Username,
				InfoUser: InfoAux,
				Bancos: $BancoAux,
				Cuentas: $CuentaAux,
				Saldos: $SaldoAux
			})
			Selected = UsuarioNumber - 1;
			Mo();

		}else alert('Hay datos que rellenar o algún dato no es válido.');

	})
})