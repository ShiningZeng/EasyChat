import React, { Component } from 'react';
import ReactDom from 'react-dom';
import io from 'socket.io-client';

var socket = io.connect();
 
function IsPC() {  
	var userAgentInfo = navigator.userAgent;  
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
	var flag = true;  
	for (let v = 0; v < Agents.length; v++) {  
	    if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
	}  
	return flag;
}
// resize the chatting room when opened in phone
if(IsPC()) {
	document.getElementById("container").style.height = window.innerWidth;
}


socket.on('connect', function(){
	console.log('connect success');

});
class ChatInterface extends Component {
	constructor() {
	    super()
	    this.state = {
			record: []
		}
	}
	componentDidMount() {
		var that = this;
		socket.on('newMsg', msg => {
		    console.log(msg);
		    var record = this.state.record;
		    record.push(<li key={record.length}>{msg}</li>);
		    that.setState({record:record});
		});
	}
	sendMessage() {
		var textDom = document.getElementsByTagName('textarea')[0];
		var msg = textDom.value;
		if(msg) {
			socket.emit('postMsg', msg);
		}
		textDom.value = '';
	}
	render() {
		
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
						<button onClick={this.sendMessage.bind(this)}>send</button>
					</div>
				</div>)
	}
}
ReactDom.render(
	<ChatInterface />,
    document.getElementById('chat-interface')
)