module.exports = function(server) {

	var users = {};
	var usersockets = {};

	var io = require('socket.io').listen(server);
	io.sockets.on('connection', function(socket){
	    console.log('connect success.');
	    socket.on('user join', function(data) {
		    users[username] = username;
		    usocket[username] = socket;
	    })
	    socket.on('postMsg', function(name, msg) {
	        console.log('postMsg');
	        io.sockets.emit('newMsg', name, msg);
	    });
	    
	})
	io.sockets.on('disconnect', function() {
		console.log('disconnect')
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
