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
			if (user.repeatPassword != user.password)
				return false;
			var temp1 = Object.assign({friendList: []},user);
			delete temp1.repeatPassword;
			this.userList[user.username] = temp1;
			this.userArray.push(user.username);
			var temp2 = Object.assign({},user);
			delete temp2.repeatPassword;
			delete temp2.password;
			console.log(temp1)
			console.log(temp2)
			return temp2;
		} else {
			return false;
		}
	},
	userLogin: function(user) {
		if (!this.userList[user.username]) {
			return "不存在此用户";
		} else if(user.password != this.userList[user.username].password) {
			return "密码错误";
		} else{
			return {
				username: user.username,
				photo: this.userList[user.username].photo
			}
		}
	}
};

module.exports = users;