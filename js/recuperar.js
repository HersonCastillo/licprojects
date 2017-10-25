
$("#clase-frm").on('submit', function(){
	return false;
})
$("#bot").on('click', function(){
	$Correo = $("#correoel").val();
	$Answer = $("#respuesta").val();

	if($Correo.length >= 1 && $Answer.length >= 1){
		var users = JSON.parse(DB.users);
		var bool = false;
		for(var i = 0; i <= (users.length - 1); i++){
			var info = JSON.parse(users[i].InfoUser);
			if(info.Email == $Correo) if(info.Respuesta == $Answer) bool = true;
		}
		if(bool){
			x = prompt("Contraseña nueva","");
			if(x == "") alert('Error al cambiar la Contraseña');
			else{
				$Reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\.@$!%*?&])([A-Za-z\d$@$!%*?&]|[\S]){8,}$/;
				if($Reg.test(x)){
					for(var i = 0; i <= (users.length - 1); i++){
						var info = JSON.parse(users[i].InfoUser);
						if(info.Email == $Correo) if(info.Respuesta == $Answer){
							info.Contra = x;
							users[i].InfoUser = JSON.stringify(info);
							DB.users = JSON.stringify(users);
							alert('Contraseña reestablecida.');
							location.reload();
						}
					}
				}else alert('Contraseña inválida: Ejemplo => Walter$1');
			}
		}else alert('No hay coincidencias para el rescate de la cuenta.');
	}else alert('Campos vacíos');
})