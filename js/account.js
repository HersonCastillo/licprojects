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
	var Oc = () => {
		$("#ventanaregistro").css({visibility: "visible"});
		$(".container").css({visibility: "hidden"});
		$("#bgventana").css({visibility: "hidden"});
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

		$NombreUsuario = "";
		$Efectivo = 0e0;
		$Cuentas = [];

		if(	Vald($Nombre) &&
			Vald($Apellido) &&
			Vald($Direccion) &&
			Vald($Contra) &&
			Vald($Email) && 
			Vald($Respuesta)
		){
			Oc();
		}else alert("Datos ingresados, no están completados o vacíos.");

	})
})