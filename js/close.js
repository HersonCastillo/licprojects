var DB = localStorage;
$("#close").on('click', function(){

	DB.setItem("log-in", "");
	DB.setItem("pre-aux-reg", "");
	DB.setItem("inicializate", false);

	var dir = location.href;
	dir = dir.split("/");
	if(dir[dir.length - 2] == "forms") location.href = "../../index.html";
	else location.href = "../index.html";
	
})

//