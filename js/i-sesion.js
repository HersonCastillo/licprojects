var DB = localStorage;

var redir_ = DB.getItem("redir");

if(redir_ == "true") location.href = "html/usuario.html";

var bandera = false;

$(w).ready(function(){
	$(".login").on('click', function(){
		$User = $("#user").val().toString();
		$Pass = $("#passw").val().toString();

		if(DB.users != null && DB.users != ""){
			if(Vald($User) && Vald($Pass)){
				var info = JSON.parse(DB.users);
				var bool = false;
				for(var i = 0; i <= (info.length - 1); i++) if(info[i].NombreUsuario == $User && JSON.parse(info[i].InfoUser).Contra == $Pass){
					bool = true;
					break;
				}
				if(bool){
					DB.setItem("inicializate", "stable");
					DB.setItem("log-in", $User);
					location.href = "html/usuario.html";
				}else alert('Credenciales incorrectas');
			}else alert("Campos vacíos");
		}else alert('En este momento, no hay usuarios existentes para la comprobación de credenciales');
	})
	
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