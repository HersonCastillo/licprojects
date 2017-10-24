var SinEspacios = (x)=>{
	if(typeof x === "string"){
		x = x.trim();
		return x;
	}else return false;
}
var Vald = (x)=>{
	r = SinEspacios(x);
	if(r !== "" && r !== false) return true;
	else return false;
}
var NumVal = (x) =>{
	if(!isNaN(x) && x.length >= 1) return true;
	else return false;
}
var Unistall = () => {
	var DB = localStorage;
	DB.setItem("users","");
	DB.setItem("inicializate","");
	DB.setItem("log-in","");
	DB.setItem("pre-aux-reg","");
}

//Funciones fuera del alcance de fquery
//No incluir contenido fquery en este archivo