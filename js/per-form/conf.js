info = MyInfo();

$("#minimal").val(info.AvisoMinimo);
$("#minimal").on('change', function(){
	update = JSON.parse(DB.users);
	id = DB.getItem('log-in');
	for(var i = 0; i <= (update.length - 1); i++){
		if(update[i].NombreUsuario == id){
			update[i].AvisoMinimo = this.value;
			DB.users = JSON.stringify(update);
			break;
		}
	}
	$("#av-conf-pri").delay(function(e){
		e.fadeIn()
	}, 1);
	$("#av-conf-pri").delay(function(e){
		e.fadeOut()
	}, 3000)
})
$("#at").html("[" + info.Cobro + "]");

var sit = $("#selcon").object()
for(var n = 0; n <= (sit.length - 1); n++){
	if(sit.item(n).value == info.Cobro) sit.item(n).setAttribute("selected", true)
	else{
		var karkom = info.Cobro.split(":");
		karkom = karkom[0];
		if(sit.item(n).value == karkom) sit.item(n).setAttribute("selected", true)
	}
}

$("#selcon").on('change', function(){
	update = JSON.parse(DB.users);
	id = DB.getItem('log-in');
	for(var i = 0; i <= (update.length - 1); i++){
		if(update[i].NombreUsuario == id){
			switch(this.value){
				case 'Efectivo':{
					$("#other-sel").html(' ')
					update[i].Cobro = "Efectivo";
					$("#at").html("[" + update[i].Cobro + "]");
					DB.users = JSON.stringify(update)
					break;
				}
				case 'Tarjeta':{
					var tarjeta = info.Tarjetas;
					if(tarjeta.length >= 1){
						//
						$("#other-sel").html("<br><select id='tarjeta-sel'><option disabled='' selected='' value='null'>SELECCIONAR</option></select> <button id='sel-tarjeta'>Seleccionar</button>");
						var _count = tarjeta.length;
						for(var j = 0; j <= (_count - 1); j++) $("#tarjeta-sel").append("<option value='"+ (tarjeta[i].Banco+tarjeta[i].Tarjeta) +"'>" + tarjeta[i].Banco + " - id - " + tarjeta[i].Tarjeta +  "</option>");
						var Selected = null;
						$("#sel-tarjeta").on('click', function(){
							Selected = $("#tarjeta-sel").val();
							if(Selected != "null"){
								update[i].Cobro = "Tarjeta:" + Selected;
								$("#at").html("[" + update[i].Cobro + "]");
								DB.users = JSON.stringify(update)
								$("#other-sel").html(' ')
							}else alert('Tiene que seleccionar una tarjeta');
						})
					}else{
						$("#at").html("<small><small>No tienes tarjetas</small></small>");
						$("#other-sel").html(' ');
					}
					break;
				}
				case 'Cuenta':{
					var cuentas = JSON.parse(info.Cuentas);
					if(cuentas.length >= 1){
						$("#other-sel").html("<br><select id='cuenta-sel'><option disabled='' selected='' value='null'>SELECCIONAR</option></select> <button id='sel-cuenta'>Seleccionar</button>");
						var _count = cuentas.length / 3;
						for(var j = 0; j <= (_count - 1); j++) $("#cuenta-sel").append("<option value='"+cuentas[3 * j]+"'>" + cuentas[3 * j] + "</option>");
						var Selected = null;
						$("#sel-cuenta").on('click', function(){
							Selected = $("#cuenta-sel").val();
							if(Selected != "null"){
								update[i].Cobro = "Cuenta:" + Selected;
								$("#at").html("[" + update[i].Cobro + "]");
								DB.users = JSON.stringify(update)
								$("#other-sel").html(' ')
							}else alert('Tiene que seleccionar un cuenta');
						})
					} else{
						$("#at").html("<small><small>No tienes cuentas</small></small>");
						$("#other-sel").html(' ');
					}
					break;
				}
				default:{break}
			}
			break;
		}
	}
	$("#av-conf-pri").delay(function(e){
		e.fadeIn()
	}, 1);
	$("#av-conf-pri").delay(function(e){
		e.fadeOut()
	}, 3000)

})