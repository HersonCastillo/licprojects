info = MyInfo();

$("#minimal").val(info.AvisoMinimo);
$("#at").html("[" + info.Cobro + "]");

$("#selcon").on('change', function(){
	update = JSON.parse(DB.users);
	id = DB.getItem('log-in');
	for(var i = 0; i <= (update.length - 1); i++){
		if(update[i].NombreUsuario == id){
			switch(this.value){
				case 'Efectivo':{
					update[i].Cobro = "Efectivo";
					$("#at").html("[" + update[i].Cobro + "]");
					break;
				}
				case 'Tarjeta':{
					var tarjeta = info.Tarjetas;
					if(tarjeta.length >= 1){
						//
						$("#at").html("[" + update[i].Cobro + "]");
					}else $("#at").html("<small><small>No tienes tarjetas</small></small>");
					break;
				}
				case 'Cuenta':{
					var cuentas = info.Cuentas;
					if(cuentas.length >= 1){
						//
						$("#other-sel").html("<br><select id='cuenta-sel'></select>");
						$("#at").html("[" + update[i].Cobro + "]");
					} else $("#at").html("<small><small>No tienes cuentas</small></small>");
					break;
				}
				default:{break}
			}
			//DB.users = JSON.stringify(update);
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