var express = require('express');
var router = express.Router();
var users = require('../model/user')

router.get('/', function(req, res, next) {
	res.render('login');
})

router.post('/login', function(req, res, next) {
	var user = req.body;
	users.addUser(user);
	//res.render('index', user);
	console.log(req.body)
	res.json(req.body);
})

router.post('/initFriendList', function(req, res, next) {
	res.json(users.getFriends(req.body.username));
})

router.post('/addFriend', function(req, res, next) {
	var message = users.addFriend(req.body.username, req.body.friend);
	res.json({message:message});
})

module.exports = router;
