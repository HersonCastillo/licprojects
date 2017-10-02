$().ready(function(){
	var NombreUsuario = "",
		Efectivo = 0e0,
		Cuentas = [];
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
		}else alert("Datos ingresados, no están completados o vacíos.");

	})
	$("#ing").on("click", function(){
		$Username = $("#username").val();
		$Efectivo = $("#efectivo").val();

		$BancoDefecto = $("#Banco").val();
		$CuentaDefecto = $("#Cuenta").val();
		$SaldoDefecto = $("#sald").val();

		if(	Vald($Username) &&
			NumVal($Efectivo) &&
			Vald($BancoDefecto) &&
			NumVal($CuentaDefecto) &&
			NumVal($SaldoDefecto)
		){
			
		}else alert('Hay datos que rellenar o algún dato no es válido.');

	})
})