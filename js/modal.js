//pantalla modal para la recuperacion de contraseña
var bandera = false;
$(w).ready(function(){
	$("#ac").on('click', function(){
		$("#bgventanac").delay(function(e){
			e.fadeIn();
		}, 1)
		$("#ventanac").delay(function(e){
			e.fadeIn();
		},100)
	})
	$("#cer").on('click', function(){
		$("#bgventanac").delay(function(e){
			e.fadeOut();
		}, 1)
	})
	$("#bgventanac").on('click', function(){
		if(!bandera) $("#bgventanac").delay(function(e){
						e.fadeOut();
					 }, 50)
		bandera = false;
	})
	$("#ventanac").on('click', function(){
		bandera = true;
	})
})