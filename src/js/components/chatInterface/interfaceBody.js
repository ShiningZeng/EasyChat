import React, { Component } from 'react';
import {socket, NAME} from '../../main';

export class InterfaceBody extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		//初始化头像点击事件
		const ul =  this.refs.ul;
		this.createNewRoom = this.createNewRoom.bind(this);
		ul.addEventListener('dblclick',this.createNewRoom,false);
		//初始化滚动事件
		const ulwrap = this.refs.ulwrap;
		this.handleMouseWheel = this.handleMouseWheel.bind(this);
		ulwrap.addEventListener('mousewheel', this.handleMouseWheel,false);
		//初始化添加好友事件
		const addFri = this.refs.addFri;
		this.handleAddFriend = this.handleAddFriend.bind(this);
		addFri.addEventListener('click', this.handleAddFriend, false);
	}
	handleAddFriend() {
		const {addFriend, users:{friends, friendList, current, chatList}} = this.props;
		if(!friends[current]) {//好友不存在该用户才添加好友
			const friend = {
				username:current,
				photo: chatList[current].photo
			};
			addFriend(friend);
			const xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
						let data = JSON.parse(xhr.responseText);
						console.log(data.message);
					} else {
						console.log("init failed!");
					}
				}
			}
			xhr.open("post", "/addFriend", true);
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			let data = "username="+NAME+"&friend="+friend.username;
			xhr.send(data);
		}
	}
	handleMouseWheel(e) {
		const ul =  this.refs.ul;
		const ulwrap = this.refs.ulwrap;
		if(!ul.style.bottom)
			ul.style.bottom = "0px";
		var bottom = parseInt(ul.style.bottom);
		var height = ul.clientHeight;
		var distance = 50;
		var wrapHeight = ulwrap.clientHeight;
		if(e.wheelDelta < 0 && bottom >= -height && bottom <= -10) { //向下滚动
			console.log(ul.style.bottom = bottom+10+"px")
		} else if(e.wheelDelta > 0 && bottom > wrapHeight-height && bottom <= distance) { //向上滚动
			console.log(ul.style.bottom = bottom-10+"px")
		}
	}
	createNewRoom(e) {
		e = e || window.event;//这一行及下一行是为兼容IE8及以下版本
		var target = e.target || e.srcElement;
		if(e.target && e.target.nodeName == 'IMG') {
			const username = e.target.getAttribute('data-username');
			const imgsrc = e.target.src;
			if(username != NAME) {
				const {changeRoom, addUser, users} = this.props;
				let flag = true;
				users.userlist.forEach(function(_username){
					if(_username == username)
						flag = false;
				})
				if(flag) {
					addUser({
						username: username,
						photo: imgsrc
					});
					changeRoom(username);
				}
			}
	    }
	}
	render() {
		const {users:{current, chatList, friends}} = this.props;
		let addFri_className = "add-friend";
		if(chatList[current].type == 'PUBLIC' || friends[current])
			addFri_className += " d-hidden";
		return (<div id='interface-body' ref="ulwrap">
					<div className={addFri_className} ref="addFri">加为好友</div>
					<ul id='chatUl' ref="ul">
						{chatList[current]?chatList[current].DOM:[]}
					</ul>
				</div>)
	}
}