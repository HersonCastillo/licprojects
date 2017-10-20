$().ready(function(){
	var UsuarioNumber = 0,
		Usuario = [], Selected = 0, InfoAux = {};
	$(".frm").on("submit", function(){
		return false;
	})
	var SinEspacios = (x)=>{
		if(typeof x === "string"){
			x = x.trim();
			return x;
		}else return false;
	}
	var Vald = (x)=>{
		r = SinEspacios(x);
		if(r !== "" && r !== false) return true;
		else return false;
	}
	var NumVal = (x) =>{
		if(!isNaN(x) && x.length >= 1) return true;
		else return false;
	}
	var Oc = () => {
		$("#ventanaregistro").css({visibility: "visible"});
		$(".container").css({visibility: "hidden"});
		$("#bgventana").css({visibility: "hidden"});
	}
	var Mo = () => {
		$(".contenido").css({visibility: "hidden"});
		$(".container").css({visibility: "hidden"});
		$("#ventanaregistro").css({display: "none"});
		$(".conta").css({visibility: "visible"});
		$(".cabe").css({display: "block"});
	}
	var Re = () => {
		$(".contenido").css({visibility: "visible"});
		$(".container").css({visibility: "visible"});
		$("#ventanaregistro").css({display: "inline-block"});
		$(".conta").css({visibility: "hidden"});
		$(".cabe").css({display: "none"});
	}
	var DeleteAll = () => {
		$("#nameuser").object().value = "";
		$("#userap").object().value = "";
		$("#pass").object().value = "";
		$("#userdir").object().value = "";
		$("#userem").object().value = "";
		$("#userdui").object().value = "";
		$("#usertel").object().value = "";
		$("#NIT").object().value = "";
		$("#userdate").object().value = "";
		$("#userpreg").object().value = "";
		$("#username").object().value = "";
		$("#efectivo").object().value = "";

		$("#user").object().value = "";
		$("#passw").object().value = "";

		$("#Banco").object().value = "";
		$("#Cuenta").object().value = "";
		$("#sald").object().value = "";
		$("#mcuenta").object().innerHTML = "";
		a = 0;
	}
	$("#close").on('click', function(){
		x = confirm("¿Está seguro que desea cerrar sesión?");
		if(x){
			Re();
			DeleteAll();
		}
		else return false;
	})
	$("#boton").on("click", function(){

		$Nombre = $("#nameuser").val();
		$Apellido = $("#userap").val();
		$Contra = $("#pass").val();
		$Direccion = $("#userdir").val();
		$Email = $("#userem").val();
		$DUI = $("#userdui").val();
		$Celular = $("#usertel").val();
		$NIT = $("#NIT").val();
		$fNacimiento = $("#userdate").val();
		$Respuesta = $("#userpreg").val();
		$Reg1 = /^[267][0-9]{3}-?[0-9]{4}$/;
		$Reg2 = /^[0-9]{8}-[0-9]$/;
		$Reg3 = /^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]{1}$/;
		$Reg4 = /^(\d{4})[-\/](\d{2})[-\/](\d{2})$/;
		$Reg5 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
		$Reg6 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\.@$!%*?&])([A-Za-z\d$@$!%*?&]|[\S]){8,}$/;
		if(	Vald($Nombre) &&
			Vald($Apellido) &&
			Vald($Direccion) &&
			Vald($Contra) &&
			Vald($Email) && 
			Vald($Respuesta)
		){
			//Validar celular, dui, nit, fnacimiento
			if ($Reg1.test($Celular) == false) alert("Ha ingresado el telefono de forma incorrecta ejemplo: 6102-0124");
			if ($Reg2.test($DUI) == false) alert("Ha ingresado el DUI de forma incorrecta ejemplo: 45123478-9");	
			if ($Reg3.test($NIT) == false) alert("Ha ingresado el NIT de forma incorrecta ejemplo: 1205-200982-101-0");	
			if ($Reg4.test(String($fNacimiento)) == false) alert("Ha ingresado su fecha de nacimiento de forma incorrecta ejemplo: 09/09/1999");
			if ($Reg5.test(String($Email)) == false) alert("Ha ingresado el email de forma incorrecta ejemplo: wecp123@gmail.com");
			if ($Reg6.test(String($Contra)) == false) alert("Ha ingresado la contraseña de forma incorrecta ejemplo: Walter1$");
			if ($Reg1.test($Celular)  && $Reg2.test($DUI)  && $Reg3.test($NIT)  && $Reg4.test($fNacimiento)  && $Reg5.test($Email) && $Reg6.test(String($Contra))) {
				Oc();
				InfoAux = {
					Nombre: $Nombre,
					Apellido: $Apellido,
					Contra: $Contra,
					Direccion: $Direccion,
					Email: $Email,
					DUI: $DUI,
					Celular: $Celular,
					NIT: $NIT,
					fNacimiento: $fNacimiento,
					Respuesta: $Respuesta
				};
			}
		}else alert("Datos ingresados, no están completados o vacíos.");

	})
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
	$(".login").on('click', function(){
		$User = $("#user").val().toString();
		$Pass = $("#passw").val().toString();

		if(Vald($User) && Vald($Pass)){
			if(Usuario.length >= 1){
				var n = false;
				for(var i = 0; i <= (Usuario.length - 1); i++) if(Usuario[i].NombreUsuario == $User && Usuario[i].InfoUser.Contra == $Pass) {
					Selected = i;
					Mo();
					n = true;
				}
				if(!n) alert("Usuario no encontrado.");
			}else alert("Usuario no encontrado.")
		}else alert("Campos vacíos");
	})
})
