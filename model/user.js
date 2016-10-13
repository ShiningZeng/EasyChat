var users = {
	userList:{},
	userArray:[],
	addFriend: function(username,friend) {
		this.userList[username].friendList.push(friend);
		this.userList[friend].friendList.push(username);
	},
	getFriends: function(username) {
		var that = this;
		var friendList = this.userList[username].friendList.map(function(name){
			return {
				username: name,
				photo: that.userList[name].photo
			};
		})
		return friendList;
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