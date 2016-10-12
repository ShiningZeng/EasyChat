var express = require('express');
var router = express.Router();
var users = require('../model/user')

router.get('/', function(req, res, next) {
	res.render('login');
})

router.post('/', function(req, res, next) {
	var user = req.body;
	users.addUser(user);
	res.render('index', user);
})

router.post('/initFriendList', function(req, res, next) {
	res.json(users.getFriends(req.body.username));
})

router.post('/addFriend', function(req, res, next) {
	users.addFriend(req.body.username, {
		username: req.body.friend,
		photo: req.body.photo
	})
	res.json({message:"addFriend success"});
})

module.exports = router;
