var info = MyInfo();
var selected = null;

$("#ingre").on('click', function(){
	$FechaIngreso = $("#men").val();
	$Motivo = $("#motivo").val();
	$Monto = $("#monto").val();

	console.log(selected)

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