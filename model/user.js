var users = {
	userList:{},
	userArray:[],
	addFriend: function(username,friend) {
		this.userList[username].friendList.push(friend);
		this.userList[friend].friendList.push(username);
	},
	getFriends: function(username) {
		return this.userList[username].friendList;
	},
	addUser: function(user) {
		if(!this.userList[user.username]) {
			user.friendList = [];
			this.userList[user.username] = user;
			this.userArray.push(user.username);
		}
	}
};

module.exports = users;