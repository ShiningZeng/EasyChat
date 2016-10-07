import React, { Component } from 'react';
import {socket, NAME} from '../main';

export class ChatList extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		this.handleClick = this.handleClick.bind(this);
		const userList =  this.refs.userList;
		userList.addEventListener('click',this.handleClick,false);
	}
	handleClick(e) {
		e = e || window.event;//这一行及下一行是为兼容IE8及以下版本
		var target = e.target || e.srcElement;
		if(e.target && e.target.nodeName == 'DIV') {
			const username = e.target.getAttribute('data-username');
			const {changeRoom, changeUnread} = this.props;
			changeRoom(username);
			// changeUnread(username);
	    }
	}
	reactToDom() {
		const {users} = this.props;
		const usersDom = [];
		const _userlist = users.userlist || [];
		_userlist.forEach(function(username) {
			const record = users[username].record;
			let lastmsg = "";
			if(record.length)
				lastmsg = record[record.length-1].text;
			const unread = users[username].unread;
			usersDom.push((<li className='private-room' key={usersDom.length}>
								<img src="" className="chat-list-photo"/>
								{unread ? <div className="chat-list-unread">{unread}</div> : null}
								
								<span className="chat-list-username">{username}</span>
								<p className="chat-list-brief">{lastmsg}</p>
								<div className='chat-list-mask' data-username = {username}></div>
							</li>));
		})
		return usersDom;
	}  
	render() {

		return (<div className='react-wrap'>
					<div className='user-search'>
					</div>
					<ul className='user-list' ref='userList'>
						{this.reactToDom()}
					</ul>
				</div>)
	}
}
