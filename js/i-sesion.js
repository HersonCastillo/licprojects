var DB = localStorage;

var redir_ = DB.getItem("redir");

if(redir_ == "true") location.href = "html/usuario.html";

$(w).ready(function(){
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