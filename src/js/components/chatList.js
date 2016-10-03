import React, { Component } from 'react';
import {socket, NAME} from '../main';

export class ChatList extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		const userList =  this.refs.userList;
		userList.addEventListener('click',this.handleClick,false);
		//console.log(userList.childNodes);
	}
	handleClick(e) {
		e = e || window.event;//这一行及下一行是为兼容IE8及以下版本
		var target = e.target || e.srcElement;
		console.log(e.target.nodeName)
		if(e.target && e.target.nodeName == 'LI') {
	    	
	    }
	}
	render() {
		return (<div className='react-wrap'>
					<div className='user-search'>
					</div>
					<ul className='user-list' ref='userList'>
						<li className='public-room' id='li1'>
							<img src='' />
							<span>username</span>
							<p>msgmsgmsgmsgmsgmsgmsgmsgmsg</p>
						</li>
						<li className='private-room' id='li2'>
							<img src='' />
							<span>username</span>
							<p>msg</p>
						</li>
						<li className='private-room' id='li3'>
							<img src='' />
							<span>username</span>
							<p>msg</p>
						</li>
					</ul>
				</div>)
	}
}
