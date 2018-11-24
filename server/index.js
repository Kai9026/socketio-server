var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var message = {message: 'Welcome'};

io.on('connection', function(socket) {
	console.log('Un cliente se ha conectado');
  socket.emit('message', message);
});

server.listen(3000, function() {
	console.log('Servidor corriendo en http://localhost:3000');
});
