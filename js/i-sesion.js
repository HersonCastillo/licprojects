var DB = localStorage;

var redir_ = DB.getItem("redir");

if(redir_ == "true") location.href = "html/usuario.html";

var bandera = false;

$(w).ready(function(){
	$(".login").on('click', function(){
		$User = $("#user").val().toString();
		$Pass = $("#passw").val().toString();

		if(Vald($User) && Vald($Pass)){
			
		}else alert("Campos vacíos");
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