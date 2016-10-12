import React, { Component } from 'react';
import {socket, NAME} from '../main';

export class ChatInterface extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		this.showEmoji();
		this.initEmoji();
		//初始化表情点击事件
		const emoji = this.refs.emoji;
		this.showEmoji = this.showEmoji.bind(this);
		emoji.addEventListener('click', this.showEmoji,false);
		//初始化表情点击事件
		const emojiContainer = this.refs.emojiContainer;
		this.chooseEmoji = this.chooseEmoji.bind(this);
		emojiContainer.addEventListener('click', this.chooseEmoji,false);
		//初始化头像点击事件
		const ul =  this.refs.ul;
		this.createNewRoom = this.createNewRoom.bind(this);
		ul.addEventListener('dblclick',this.createNewRoom,false);
		//初始化滚动点击事件
		const ulwrap = this.refs.ulwrap;
		this.handleMouseWheel = this.handleMouseWheel.bind(this);
		ulwrap.addEventListener('mousewheel', this.handleMouseWheel,false);
		//初始化添加好友事件
		const addFri = this.refs.addFri;
		this.handleAddFriend = this.handleAddFriend.bind(this);
		addFri.addEventListener('click', this.handleAddFriend, false);
		//初始化发送事件
		const send = this.refs.send;
		this.sendMessage  = this.sendMessage.bind(this);
		send.addEventListener('click', this.sendMessage, false);
	}
	handleAddFriend() {
		const {addFriend, users:{friends, friendList, current, chatList}} = this.props;
		if(!friends[current]) {//好友不存在该用户才添加好友
			const friend = {
				username:current,
				photo: chatList[current].photo
			};
			addFriend(friend);
			// const xhr = new XMLHttpRequest();
			// xhr.onreadystatechange = function() {
			// 	if (xhr.readyState == 4) {
			// 		if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
			// 			let data = JSON.parse(xhr.responseText);
			// 			console.log(data.message);
			// 		} else {
			// 			console.log("init failed!");
			// 		}
			// 	}
			// }
			// xhr.open("post", "/addFriend", true);
			// xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			// let data = "username="+NAME+"&friend="+friend.username+"&photo="+friend.photo;
			// xhr.send(data);
		}
	}
	initEmoji() {
		let emojiContainer = document.getElementById('emoji-container');
		let emojiFrag = document.createDocumentFragment();
		for (var i = 69; i > 0; i--) {
            let emojiItem = document.createElement('img');
            emojiItem.src = 'img/emoji/' + i + '.gif';
            emojiFrag.appendChild(emojiItem);
        };
        emojiContainer.appendChild(emojiFrag); 	
	}
	sendMessage() {
		const ul =  this.refs.ul;
		ul.style.bottom= "0px";
		const inputarea = this.refs.inputarea;
		let msg = inputarea.innerHTML;
		msg = msg.replace(/&amp;/g,'&')
				.replace(/<div>/g, '')
				.replace(/<\/div>/g, '')
				.replace(/<br>/g, '')
				.replace(/&gt;/g, '>')
				.replace(/&lt;/g, '<')
				.replace(/&nbsp;/g, ' ');
		if(msg.length) {
			const {users, users:{current}} = this.props;
			socket.emit('postMsg', {
				source:NAME,
				message: msg,
				room: current,
				imgsrc: users.chatList[NAME].photo
			});
		}
		inputarea.innerHTML = '';
	}
	chooseEmoji(e) {
		e = e || window.event;//这一行及下一行是为兼容IE8及以下版本
		var target = e.target || e.srcElement;
		if(e.target && e.target.nodeName == 'IMG') {
			const inputarea = this.refs.inputarea;
			inputarea.appendChild(e.target.cloneNode())
			this.showEmoji();
	    }
	}
	showEmoji() {
		const emojiContainer = this.refs.emojiContainer;
		if(emojiContainer.style.display == "none")
			emojiContainer.style.display = "";
		else
			emojiContainer.style.display = "none";
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
		const {users, users:{current, chatList}} = this.props;
		let addFri_className = "add-friend";
		if(chatList[current].type == 'PUBLIC')
			addFri_className += " d-hidden";

		return (<div className='react-wrap'>
					<div className='interface-header'>
						<p><span>{current}</span></p>
					</div>
					<div className='interface-body' ref="ulwrap">
						<div className={addFri_className} ref="addFri">加为好友</div>
						<ul ref="ul">
							{chatList[current]?chatList[current].DOM:[]}
						</ul>
					</div>
					<div className='interface-footer'>
						<div className='interface-footer-multiFunc'>
							<ul>
								<li>
									<i className='fa fa-smile-o' ref='emoji'></i>
								</li>
								<li>
									<i className='fa fa-folder-open-o'></i>
								</li>
								<li>
									<i className='fa fa-scissors'></i>
								</li>
							</ul>
						</div>
						<div className="emoji-container" id='emoji-container' ref='emojiContainer'></div>
						<div contentEditable='true' className="chat-inputarea" ref='inputarea'>
						</div>
						<div className='interface-footer-send' ref='send'>发送</div>
					</div>
				</div>)
	}
}
