var React = require('../bower_components/react/react');
var ReactDOM = require("../bower_components/react/react-dom");
var io = require("socket.io-client");
var socket = io.connect();
 

function IsPC() {  
	var userAgentInfo = navigator.userAgent;  
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
	var flag = true;  
	for (var v = 0; v < Agents.length; v++) {  
	    if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
	}  
	return flag;
}
// resize the chatting room when opened in phone
if(IsPC()) {
	document.getElementById("container").style.height = window.innerWidth;
}

socket.on('connect', function(){
});


var EasyChat = React.createClass({
	getInitialState: function() {
		return {
			online: false,
			username: '游客',

		}
	},
	render: function() {
		
	}
})
