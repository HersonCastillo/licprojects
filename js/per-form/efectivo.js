var info = MyInfo();
var saldos = JSON.parse(info.Cuentas);

var count = saldos.length / 3, sald = 0;

for(var i = 0; i <= (saldos.length - 1); i++) if((i + 1) % 3 == 0) sald = parseFloat(parseFloat(sald) + parseFloat(saldos[i]));

$("#saldo-val").val("Cuentas bancarias: $" + sald);
$("#efec-val").val("Efectivo: $" + info.Efectivo);
