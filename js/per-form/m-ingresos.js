var info = MyInfo();

ingresos = info.Ingresos;

if(ingresos.length >= 1) for(var i = 0; i <= (ingresos.length - 1); i++) $("#ingresos").append("<li>#"+(i+1)+" <b>" + ingresos[i].Motivo + "</b> <span>$" + ingresos[i].Monto + "</span> "+ ingresos[i].Fecha +" <i>" + ingresos[i].Tipo +"</i></li>")
else $("#ingresos").html("No hay ingresos registrados");
