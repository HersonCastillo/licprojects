//inicializa el socket en el puerto 8080
var io = require('socket.io').listen(8080).sockets;
//almacena los usuarios qeu han estado
var users = [];

//cuando detectan una conexión socket
io.on('connection', function(sck){
	//cuando detecta datos
	sck.on('envio', function(data){
		//datos resividos los reenvia
		io.emit('recieve', data);
	})
})
