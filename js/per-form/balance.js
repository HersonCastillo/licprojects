var info = MyInfo();

gastos = Gastos();
ingresos = Ingresos();

Efectivo = info.Efectivo;

cuentas = JSON.parse(info.Cuentas);
_count = cuentas.length / 3;
sumaCuentas = 0;
for(var i = 0; i <= (_count - 1); i++) sumaCuentas += parseFloat(cuentas[(3*i)+2]);

tarjetas = info.Tarjetas;
sumaTarjetas = 0;
for(var j = 0; j <= (tarjetas.length - 1); j++) sumaTarjetas += parseFloat(tarjetas[j].Saldo);

Minimo = info.AvisoMinimo;



Total = ingresos + sumaTarjetas + sumaCuentas;
Total -= gastos;

$("#balance").html("<label id='clo'>"+Total+"</label>");
$("#c-val").html("Suma total de montos en cuentas $<b>"+sumaCuentas+"</b>");
$("#t-val").html("Suma total de montos en tarjetas bancarias $<b>"+sumaTarjetas+"</b>");
$("#ingre").html("Suma de todos los ingresos registrados $<b>"+ingresos+"</b>");
$("#gas").html("Suma de todos los gastos registrados $<b>"+gastos+"</b>");

if(Total > (Minimo * 0.5)) $("#clo").css({color:"green"});
else if(Total > (Minimo * 0.25)) $("#clo").css({color:"orange"});
	else if(Total > (Minimo * 0.05)) $("#clo").css({color:"red"});