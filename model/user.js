var users = {
	userList:{},
	userArray:[],
	addFriend: function(username,friend) {
		if(this.userList[username].indexof(friend) == -1) {
			this.userList[username].friendList.push(friend);
			this.userList[friend].friendList.push(username);
			return username+"adds friend"+friend+"successfully";
		} else {
			return username+"had added"+friend+"previously";
		}
		
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
			this.userList[user.username] = Object.assign({friendList: []},user);
			this.userArray.push(user.username);
		}
	}
};

module.exports = users;