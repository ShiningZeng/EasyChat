import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {render} from 'react-dom';
import {Provider, connect} from "react-redux"
import io from 'socket.io-client';
import {App} from './components/App';
import configureStore from "./store";
import *as Actions from './actions/action'

const store = configureStore();
export const socket = io.connect();
export const NAME = username;
//let photo = "img/photo/photo"+parseInt(Math.random()*9+1)+".jpg";
export const PHOTO = photo;

function IsPC() {  
	const userAgentInfo = navigator.userAgent;  
	const Agents = new Array("Mobile", "Windows Phone", "Android", "iPhone", "SymbianOS", "iPad", "iPod");  
	let flag = true;  
	for (let v = 0; v < Agents.length; v++) {  
	    if (userAgentInfo.indexOf(Agents[v]) >= 0) { flag = false; break; }  
	}  
	return flag;
}
export const isPC = IsPC();

//将state相关属性绑定到props的中


//兼容手机UC，QQ和IE
if (typeof Object.assign != 'function') {
  (function () {
	Object.assign = function (target) {
	 'use strict';
	 if (target === undefined || target === null) {
	   throw new TypeError('Cannot convert undefined or null to object');
	 }
	 var output = Object(target);
	 for (var index = 1; index < arguments.length; index++) {
	   var source = arguments[index];
	   if (source !== undefined && source !== null) {
	     for (var nextKey in source) {
	       if (source.hasOwnProperty(nextKey)) {
	         output[nextKey] = source[nextKey];
	       }
	     }
	   }
	 }
	 return output;
	};
})();
}

function mapStateToprops(state){
	return {
		users: state.users,
		appState: state.appState
	}
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch){
	return bindActionCreators(Actions,dispatch);
}
const AppComponent = connect(
	mapStateToprops, //输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数
	mapDispatchToProps //输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去
	)(App);

render(
	<Provider store={store}>
		<AppComponent />
	</Provider>,
    document.getElementById('container')
)

