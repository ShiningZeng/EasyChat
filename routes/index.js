var express = require('express');
var router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var path = require('path');
var fs = require('fs');
var users = require('../model/user');


router.get('/register', function(req, res, next) {
	res.render('register');
})

router.get('/', function(req, res, next) {
	var user;
	if(req.session.user) {
		user = req.session.user;
		res.render('index', user);
	} else {
		res.redirect('/register')
	}
})

router.post('/register', function(req, res, next) {
	var user = users.addUser(req.body);
	if (user) {
		req.session.user = user;
		res.redirect('/');
	} else {
		res.render('register', {message:"昵称已存在"});
	}
	
})

router.get('/login', function(req, res, next) {
	res.render('login');
})
router.post('/login', function(req, res, next) {
	console.log(req.body)
	var user = users.userLogin(req.body);
	if (user == "不存在此用户") {
		res.render('login', {message: "不存在此用户"});
	} else if (user == "密码错误") {
		res.render('login', {message: "密码错误"});
	} else {
		req.session.user = user;
		res.redirect('/');
	}
})

router.post('/initFriendList', function(req, res, next) {
	res.json(users.getFriends(req.body.username));
})

router.post('/addFriend', function(req, res, next) {
	var message = users.addFriend(req.body.username, req.body.friend);
	res.json({message:message});
})

router.post('/upload', multipartMiddleware, function(req, res, next) {
  console.log(req.files.files);
  //get filename
  var filename = req.files.files.originalFilename || path.basename(req.files.files.path);
  console.log(filename);
  //copy file to a public directory
  var targetPath = path.resolve(path.dirname(__filename),'..') + '/dist/dir/' + filename;
  console.log(targetPath);
  //copy file
  fs.createReadStream(req.files.files.path).pipe(fs.createWriteStream(targetPath));

  res.json({fileMessage: filename});
})


module.exports = router;
