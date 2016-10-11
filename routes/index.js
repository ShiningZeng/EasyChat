var express = require('express');
var router = express.Router();
var users = require('../model/user')

/* GET home page. */
router.get('/', function(req, res, next) {
	// var username = req.session.username;
	// if(!username)
	// 	username = 'visitor'
	var username = Math.random().toString(36).substr(2,6);//生成随机用户名以供快速测试
  	res.render('index', {username: username});
});

router.get('/login', function(req, res, next) {
	res.render('login');
})

router.post('/login', function(req, res, next) {
	var username = req.body.username;
	//req.session.username = req.body.username;
	//res.redirect('/')
	res.render('index', {username: req.body.username});
})
module.exports = router;
