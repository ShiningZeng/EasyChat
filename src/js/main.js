import React, { Component } from 'react'
var ReactDom = require("react-dom");
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


function objExtend(source) { 
	var result={};
	for (var key in source) {
      result[key] = typeof source[key]==='object' ? copy(source[key]): source[key];
    } 
    return result; 
}


socket.on('connect', function(){
	console.log('connect success');

});
var ChatInterface = React.createClass({
	getInitialState: function() {
		return {
			record: [],
			test:''
		}
	},
	componentDidMount: function() {
		var that = this;
		socket.on('newMsg', function(msg) {
		    console.log(msg);
		    that.state.record.push(<li key='1'>{msg}</li>);
		});
	},
	sendMessage: function() {
		var textDom = document.getElementsByTagName('textarea')[0];
		var message = textDom.value;
		if(message) {
			socket.emit('postMsg', message);
		}
		textDom.value = '';
		this.state.record.push(<li key='1'>{message}</li>);
		this.state.test = message;
		console.log(this.state.record,this.state.test);
	},
	render: function() {
		
		return (<div className='react-wrap'>
					<div className='interface-header'>
					</div>
					<div className='interface-body'>
						<ul ref="ul">
							{this.state.record}
						</ul>
					</div>
					<div className='interface-footer'>
						<textarea>
						</textarea>
						<button onClick={this.sendMessage}>send</button>
					</div>
				</div>)
	}
})
ReactDom.render(
	<ChatInterface />,
    document.getElementById('chat-interface')
)