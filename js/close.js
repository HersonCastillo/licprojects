var DB = localStorage;
$("#close").on('click', function(){

	DB.setItem("log-in", "");
	DB.setItem("pre-aux-reg", "");
	DB.setItem("inicializate", false);

	location.href = "../index.html";
})

// undetected