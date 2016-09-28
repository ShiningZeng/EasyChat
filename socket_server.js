module.exports = function(server) {
	var io = require('socket.io').listen(server);
	io.sockets.on('connection', function(socket){
	  console.log('connect success.')
	  socket.on('postMsg', function(msg) {
	      console.log('postMsg');
	      io.sockets.emit('newMsg', msg);
	  });
	})
}
