var React = require('react');
var ReactDOM = require("react-dom");
var io = require("socket.io-client");
var socket = io.connect();

socket.on('connect', function(){
	document.getElementById("test").innerHTML = "s";
});