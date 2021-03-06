import React, { Component } from 'react';
import {socket, NAME, PHOTO, isPC} from '../main';

export class ChatList extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		this.handleClick = this.handleClick.bind(this);
		this.handleMouseWheel = this.handleMouseWheel.bind(this);
		const userList =  this.refs.userList;
		userList.addEventListener('click',this.handleClick,false);
		const ulwrap = this.refs.ulwrap;
		ulwrap.addEventListener('mousewheel', this.handleMouseWheel,false);
	}
	handleClick(e) {
		e = e || window.event;//这一行及下一行是为兼容IE8及以下版本
		var target = e.target || e.srcElement;
		if(e.target && e.target.nodeName == 'DIV') {
			const username = e.target.getAttribute('data-username');
			const {changeState, changeRoom, changeUnread, appState, addUser, users:{chatList, friends}} = this.props;
			if(!chatList[username]) {
				addUser(Object.assign({},friends[username], {fristate:'yes'}));
			}
			changeRoom(username);
			changeUnread(username);
			changeState('chatInterface');
	    }
	}
	handleMouseWheel(e) {
		const ul =  this.refs.userList;
		const ulwrap = this.refs.ulwrap;
		if(!ul.style.bottom)
			ul.style.bottom = "0px";
		const bottom = parseInt(ul.style.bottom);
		const height = ul.clientHeight;
		const distance = 50;
		const wrapHeight = ulwrap.clientHeight;
		if(e.wheelDelta < 0 && bottom >= -height && bottom <= -10) { //向下滚动
			console.log(ul.style.bottom = bottom+10+"px")
		} else if(e.wheelDelta > 0 && bottom > wrapHeight-height && bottom <= distance) { //向上滚动
			console.log(ul.style.bottom = bottom-10+"px")
		}
	}
	reactToDom() {
		const {users, appState, users:{chatList, current, userlist, friendList, friends}} = this.props;
		const usersDom = [];
		userlist.forEach(function(username) {
			if(username != NAME) {
				const record = chatList[username].record;
				let lastmsg = "";
				if(record.length) {
					const reg = /<img src="[0-9a-zA-Z\/]{0,20}\.gif">/igm;
					if (typeof record[record.length-1].text != "object"){
						lastmsg = (chatList[username].type=='PUBLIC' ? record[record.length-1].username+' : ' : '')+
						record[record.length-1].text.replace(reg,"[emoji]");
					}
					else {//传输的text如果是对象，此处特指文件信息
						if(chatList[username].type=='PUBLIC') {
							lastmsg = record[record.length-1].username+"共享了文件:"+record[record.length-1].text.fileName;
						} else {
							lastmsg = "对方向您发送了文件:"+record[record.length-1].text.fileName;
						}

					}
				}
				let unread = chatList[username].unread;
				if(unread >= 99)
					unread = "...";
				let imgsrc = chatList[username].photo;
				usersDom.push((<li className={current == username ? "active" : ''} key={usersDom.length}>
									<img src={imgsrc} className="chat-list-photo"/>
									<div className={unread ? "chat-list-unread" : "chat-list-unread d-hidden"}>{unread}</div>
									<span className="chat-list-username">{username}</span>
									<p className="chat-list-brief">{lastmsg}</p>
									<div className='chat-list-mask' data-username = {username}></div>
								</li>));
			}
		})
		return usersDom;
	}  
	render() {
		const {appState:{componentZIndex:{chatList}}} = this.props;
		return (<div id='chat-list' style={{zIndex: chatList}}>
					{
						isPC ? <div className='user-search'>
							<input />
							<i className="fa fa-search"></i>
							<div>+</div>
						</div>
						: null
					}
					<div className="userlist-wrap" ref="ulwrap">
						<ul className='user-list' ref='userList'>
							{this.reactToDom()}
						</ul>
					</div>
				</div>)
	}
}
