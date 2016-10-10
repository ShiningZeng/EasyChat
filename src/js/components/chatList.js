import React, { Component } from 'react';
import {socket, NAME, PHOTO} from '../main';

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
			const {changeRoom, changeUnread} = this.props;
			changeRoom(username);
			changeUnread(username);
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
		const {users, appstate, users:{chatList}} = this.props;
		const usersDom = [];
		const _userlist = users.userlist || [];
		if(appstate.show) {
			_userlist.forEach(function(username) {
				if(username != NAME) {
					const record = chatList[username].record;
					let lastmsg = "";
					if(record.length) {
						const reg = /<img src="[0-9a-zA-Z\/]{0,20}\.gif">/igm;
						lastmsg = (username=='公共聊天室' ? record[record.length-1].username+' : ' : '')+
							record[record.length-1].text.replace(reg,"[emoji]");
					}
					let unread = chatList[username].unread;
					if(unread >= 99)
						unread = "...";
					let imgsrc = chatList[username].photo;
					usersDom.push((<li className={users.current == username ? "active" : ''} key={usersDom.length}>
										<img src={imgsrc} className="chat-list-photo"/>
										{unread ? <div className="chat-list-unread">{unread}</div> : null}
										
										<span className="chat-list-username">{username}</span>
										<p className="chat-list-brief">{lastmsg}</p>
										<div className='chat-list-mask' data-username = {username}></div>
									</li>));
				}
			})
		} else {
			_userlist.forEach(function(username) {
				if(username != NAME) {
					let imgsrc = chatList[username].photo;
					usersDom.push((<li key={usersDom.length}>
										<img src={imgsrc} className="chat-list-photo"/>
										<p className="frendslist-username">{username}</p>
										<div className='chat-list-mask' data-username = {username}></div>
									</li>));
				}
			})
		}
		return usersDom;
	}  
	render() {

		return (<div className='react-wrap'>
					<div className='user-search'>
						<input />
						<i className="fa fa-search"></i>
						<div>+</div>
					</div>
					<div className="userlist-wrap" ref="ulwrap">
						<ul className='user-list' ref='userList'>
							{this.reactToDom()}
						</ul>
					</div>
					
				</div>)
	}
}
