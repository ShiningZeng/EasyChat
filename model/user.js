
var users = {
	userList:{},
	userArray:[],
	getUser: function() {
	},
	addUser: function(user) {
		this.usersList[user.username] = user;
	}
};

module.exports = users;