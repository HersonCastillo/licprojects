var Usuario = [],
	UsuarioNumber = 0,
	InfoAux = [];
$().ready(function(){
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
	$("#close").on('click', function(){
		x = confirm("¿Está seguro que desea cerrar sesión?");
		if(x) {
			console.log(Usuario)
			Re();
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

		if(	Vald($Nombre) &&
			Vald($Apellido) &&
			Vald($Direccion) &&
			Vald($Contra) &&
			Vald($Email) && 
			Vald($Respuesta)
		){
			//Validar celular, dui, nit, fnacimiento
			Oc();
			InfoAux.push({
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
			})
		}else alert("Datos ingresados, no están completados o vacíos.");

	})
	$("#ing").on("click", function(){
		$Username = $("#username").val();
		$Efectivo = $("#efectivo").val();

		$BancoDefecto = $("#Banco").val();
		$CuentaDefecto = $("#Cuenta").val();
		$SaldoDefecto = $("#sald").val();

		$BancoAux = [];
		$CuentaAux = [];
		$SaldoAux = [];

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
			Mo();
		}else alert('Hay datos que rellenar o algún dato no es válido.');

	})
})