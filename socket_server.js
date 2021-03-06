module.exports = function(server) {
	var io = require('socket.io').listen(server);
	//控制台打印动作
	function log(msg) {
		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
		console.log('['+h+':'+m+':'+s+'] '+msg);
	}
	//用于存储每一个socket连接
	var usockets = {};
	//在线用户数
	var count = 0;
	//进入socket连接
	io.sockets.on('connection', function(socket){
	    socket.on('user join', function(data) {
	    	log('user '+data.username+' joins.');
	    	count++;
	    	var username = data.username;
		    socket.username = username;
		    usockets[username] = socket;
		    socket.broadcast.emit('systemBroadcast', {
				message: username+"加入了聊天室",
				count: count
			});
			socket.emit('systemBroadcast', {
				message: username+"加入了聊天室",
				count: count
			});
	    })
	    socket.on('postMsg', function(data) {
	        log('postMsg');
	        console.log(data)
	        if(data.room == '公共聊天室') {
	        	io.sockets.emit('resMsg', data);
	        } else {
				usockets[data.source].emit('resMsg', data);
				var room = data.room;
				data.room = data.source;
	        	usockets[room].emit('resMsg', data);
	        }
	    });
	    socket.on('sendFile', function(data) {
	    	log('sendFile');
	    	if(data.room == '公共聊天室') {
	    		io.sockets.emit('resFile', data);
	    	} else {
	    		usockets[data.room].emit('resFile', data);
	    	}
	    })
	    socket.on('addFri', function(data) {
	    	log('addFri');
	    	usockets[data.target].emit('resAddFri', data);
	    })
	    socket.on('agreeAddFri', function(data) {
	    	log('agreeAddFri');
	    	usockets[data.target].emit('addFriSuccess',data);
	    })
	    socket.on('disconnect', function() {
			log(socket.username+' leaves.');
			if(count > 0)
				count--;
			socket.broadcast.emit('systemBroadcast', {
				message: socket.username+"离开了聊天室",
				count: count
			});
			//delete usockets[socket.username];
		});
	})
}
