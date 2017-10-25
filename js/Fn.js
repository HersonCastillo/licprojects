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
var ODB = () => {
	var DB = localStorage;
	var users = JSON.parse(DB.getItem("users"));
	for(var j = 0; j <= (users.length - 1); j++) users[j].InfoUser = JSON.parse(users[j].InfoUser);
	return users;
}
var MyInfo = () => {
	var info = ODB();
	var id = localStorage.getItem('log-in');
	for(var j = 0; j <= (info.length - 1); j++) if(info[j].NombreUsuario == id) return info[j];;
	return null;
}
var Ingresos = () => {
	var info = MyInfo();
	var _c = info.Ingresos.length;
	var suma = 0;
	for(var i = 0; i <=(_c - 1); i++) suma = parseFloat(parseFloat(suma) + parseFloat(info.Ingresos[i].Monto));
	return suma;
}
var Gastos = () => {
	var info = MyInfo();
	var _c = info.Gastos.length;
	var suma = 0;
	for(var i = 0; i <=(_c - 1); i++) suma = parseFloat(parseFloat(suma) + parseFloat(info.Gastos[i].Monto));
	return suma;
}
//Funciones fuera del alcance de fquery
//No incluir contenido fquery en este archivo