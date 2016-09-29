import React, { Component } from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux"
import io from 'socket.io-client';
import {chatInterface} from './components/chatInterface';
import configureStore from "./store";

const store =configureStore();
var socket = io.connect();
var ChatInterface = chatInterface(React, Component, render, socket, store);
 
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
//socket连接成功提示
socket.on('connect', function(){
	console.log('connect success');
});


render(
	<Provider store={store}>
		<ChatInterface />
	</Provider>,
    document.getElementById('chat-interface')
)

