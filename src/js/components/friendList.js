import React, { Component } from 'react';
import {socket, NAME, PHOTO, isPC} from '../main';

export class FriendList extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		this.handleClick = this.handleClick.bind(this);
		this.handleMouseWheel = this.handleMouseWheel.bind(this);
		const friendList =  this.refs.friendList;
		friendList.addEventListener('click',this.handleClick,false);
		const ulwrap = this.refs.ulwrap;
		ulwrap.addEventListener('mousewheel', this.handleMouseWheel,false);
	}
	handleClick(e) {
		e = e || window.event;//这一行及下一行是为兼容IE8及以下版本
		var target = e.target || e.srcElement;
		if(e.target && e.target.nodeName == 'DIV') {
			const username = e.target.getAttribute('data-username');
			const {changeRoom, changeUnread, appState, addUser, users:{chatList, friends}} = this.props;
			if(!chatList[username]) {
				console.log(chatList);
				addUser(Object.assign({},friends[username], {fristate:'yes'}));
			}
			console.log(chatList);
			changeRoom(username);
			changeUnread(username);
	    }
	}
	handleMouseWheel(e) {
		const ul =  this.refs.friendList;
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
		const {appState, users:{friendList, friends}} = this.props;
		const usersDom = [];
		friendList.forEach(function(username) {
			if(username != NAME) {
				let imgsrc = friends[username].photo;
				usersDom.push((<li key={usersDom.length}>
									<img src={imgsrc} className="friend-list-photo"/>
									<p className="frendslist-username">{username}</p>
									<div className='friend-list-mask' data-username = {username}></div>
								</li>));
			}
		})
		return usersDom;
	}  
	render() {
		const {appState:{componentZIndex:{friendList}}} = this.props;
		return (<div id='friend-list' style={{zIndex: friendList}}>
					{
						isPC ? <div className='user-search'>
							<input />
							<i className="fa fa-search"></i>
							<div>+</div>
						</div>
						: null
					}
					<div className="friendlist-wrap" ref="ulwrap">
						<ul className='friend-list' ref='friendList'>
							{this.reactToDom()}
						</ul>
					</div>
				</div>)
	}
}
