import React, { Component } from 'react';
import {socket, NAME} from '../main';

export class ChatInterface extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		this.handleDoubleClick = this.handleDoubleClick.bind(this);
		const ul =  this.refs.ul;
		ul.addEventListener('dblclick',this.handleDoubleClick,false);
	}
	sendMessage() {
		let textDom = document.getElementsByTagName('textarea')[0];
		const msg = textDom.value;
		if(msg) {
			const {users:{current}} = this.props;
			socket.emit('postMsg', {
				source:NAME,
				message: msg,
				room: current
			});
		}
		textDom.value = '';
	}
	handleDoubleClick(e) {
		console.log(this);
		e = e || window.event;//这一行及下一行是为兼容IE8及以下版本
		var target = e.target || e.srcElement;
		if(e.target && e.target.nodeName == 'IMG') {
			const username = e.target.getAttribute('data-username');
			if(username != NAME) {
				const {changeRoom, addUser} = this.props;
				addUser(username,"boy");
				changeRoom(username);
			}
	    }
	}
	render() {
		const {users} = this.props;
		const current = users.current;
		return (<div className='react-wrap'>
					<div className='interface-header'>
						<h1>{current}</h1>
					</div>
					<div className='interface-body'>
						<ul ref="ul">
							{users[current]?users[current].DOM:[]}
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
