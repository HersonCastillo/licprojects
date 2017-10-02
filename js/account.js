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
		$Reg1 = /^[267][0-9]{3}-?[0-9]{4}$/;
		$Reg2 = /^[0-9]{8}-[0-9]$/;
		$Reg3 = /^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]{1}$/;
		$Reg4 = /^(\d{4})[-\/](\d{2})[-\/](\d{2})$/;

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
			
			if ($Reg1.test($Celular) == true && $Reg2.test($DUI) == true && $Reg3.test($NIT) == true && $Reg4.test($fNacimiento) == true ) Oc();
				
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