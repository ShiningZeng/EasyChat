module.exports = function(server) {
	function log(msg) {
		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
		console.log('['+h+':'+m+':'+s+'] '+msg);
	}


	var users = {};
	var usockets = {};

	var io = require('socket.io').listen(server);

	io.sockets.on('connection', function(socket){
	    socket.on('user join', function(data) {
	    	log('user '+data.username+' joins.');
	    	var username = data.username;
		    users[username] = username;
		    usockets[username] = socket;
	    })
	    socket.on('postMsg', function(data) {
	        log('postMsg');
	        if(data.room == 'publicRoom') {
	        	io.sockets.emit('resMsg', data);
	        } else {
				usockets[data.source].emit('resMsg', data);
				var room = data.room;
				data.room = data.source;
	        	usockets[room].emit('resMsg', data);
	        }
	    });
	    
	})
	io.sockets.on('disconnect', function() {
		log('disconnect')
	    // if (username) {
	    //     counter--;
	    //     delete users[username];
	    //     delete usocket[username];
	    //     if (home.name == username) {
	    //         homeLeave(username);
	    //     }
	    //     sendmsg({
	    //         type: 0,
	    //         msg: "用户<b>" + username + "</b>离开聊天室",
	    //         counter: counter,
	    //         users: users
	    //     })
	    // }
	});

	function sendUserMsg(data) {
	    if (data.to in usersocket) {
	        console.log('================')
	        console.log('to' + data.to, data);
	        usocket[data.to].emit('to' + data.to, data);
	        usocket[data.user].emit('to' + data.user, data);
	        console.log('================')
	    }
	}
}
