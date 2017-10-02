$().ready(function(){
	$(".frm").on("submit", function(){
		return false;
	})
	$("#boton").on("click", function(){

		


		$("#ventanaregistro").css({visibility: "visible"});
		$(".container").css({visibility: "hidden"});
		$("#bgventana").css({visibility: "hidden"});



	})
})