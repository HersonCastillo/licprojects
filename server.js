var io = require('socket.io').listen(8080).sockets;

var users = [];

io.on('connection', function(sck){
	sck.on('envio', function(data){
		io.emit('recieve', data);
	})
})