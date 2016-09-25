var React = require('../bower_components/react/react');
var ReactDOM = require("../bower_components/react/react-dom");
var io = require("socket.io-client");
var socket = io.connect();

socket.on('connect', function(){
	document.getElementById("test").innerHTML = "s";
});

function IsPC() {  
	var userAgentInfo = navigator.userAgent;  
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
	var flag = true;  
	for (var v = 0; v < Agents.length; v++) {  
	    if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
	}  
	return flag;  
}
if(IsPC()) {
	document.getElementById("container").style.height = window.innerWidth;
}