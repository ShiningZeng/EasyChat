import React, { Component } from 'react';
import {socket, NAME} from '../main';

export class ChatInterface extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		this.handleDoubleClick = this.handleDoubleClick.bind(this);
		this.handleMouseWheel = this.handleMouseWheel.bind(this);
		const ul =  this.refs.ul;
		ul.addEventListener('dblclick',this.handleDoubleClick,false);
		const ulwrap = this.refs.ulwrap;
		ulwrap.addEventListener('mousewheel', this.handleMouseWheel,false);
	}
	sendMessage() {
		const ul =  this.refs.ul;
		ul.style.bottom= "0px";
		let textDom = document.getElementsByTagName('textarea')[0];
		const msg = textDom.value;
		if(msg) {
			const {users, users:{current}} = this.props;
			console.log(users[NAME].photo)
			socket.emit('postMsg', {
				source:NAME,
				message: msg,
				room: current,
				imgsrc: users[NAME].photo
			});
		}
		textDom.value = '';
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
	handleDoubleClick(e) {
		console.log(this);
		e = e || window.event;//这一行及下一行是为兼容IE8及以下版本
		var target = e.target || e.srcElement;
		if(e.target && e.target.nodeName == 'IMG') {
			const username = e.target.getAttribute('data-username');
			const imgsrc = e.target.src;
			if(username != NAME) {
				const {changeRoom, addUser} = this.props;
				addUser({
					username: username,
					photo: imgsrc
				});
				changeRoom(username);
			}
	    }
	}
	render() {
		const {users} = this.props;
		const current = users.current;
		return (<div className='react-wrap'>
					<div className='interface-header'>
						<p><span>{current}</span></p>
					</div>
					<div className='interface-body' ref="ulwrap">
						<ul ref="ul">
							{users[current]?users[current].DOM:[]}
						</ul>
					</div>
					<div className='interface-footer'>
						<div className='interface-footer-multiFunc'>
							<ul>
								<li>
									<i className='fa fa-smile-o'></i>
								</li>
								<li>
									<i className='fa fa-folder-open-o'></i>
								</li>
								<li>
									<i className='fa fa-scissors'></i>
								</li>
							</ul>
						</div>
						<textarea>
						</textarea>
						<div className='interface-footer-send' onClick={this.sendMessage.bind(this)}>send</div>
					</div>
				</div>)
	}
}
