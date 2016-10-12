import React, { Component } from 'react';
import {ChatInterface} from './chatInterface';
import {ChatList} from './chatList';
import {MenuNav} from './menuNav';
import {socket, NAME, PHOTO} from '../main';


export class App extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		this.initFriendList();
		const {addUser} = this.props;
		addUser({
			username:NAME,
			photo:PHOTO
		})
		socket.on('resMsg', (data) => {
			const {users, addUser, addRecord, changeUnread, users:{chatList}} = this.props;
			if(!chatList[data.room])
				addUser({
					username: data.room,
					photo: data.imgsrc
				});
		    addRecord({
		    	room: data.room,
		        username: data.source,
		        text: data.message,
		        time: new Date(),
		        photo: data.imgsrc
		    });
		    changeUnread(data.room);
		});
	}
	handlekeypress() {
	}
	initFriendList() {
		const {addFriend,users:{friends, friendList, current, chatList}} = this.props;
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
					let data = JSON.parse(xhr.responseText);
					data.forEach(function(friend) {
							addFriend(friend);
							console.log(friend)
							console.log(friends)
							console.log(friendList)
						})
					console.log(data);
				} else {
					console.log("init failed!");
				}
			}
		}
		xhr.open("post", "/initFriendList", true);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		let data = "username="+NAME;
		xhr.send(data);
	}
	render() {
		return (<div className='react-wrap' onKeyPress={this.handlekeypress}>
					<div id='menu-nav'>
						<MenuNav {...this.props}/>
					</div>
					<div id='chat-list'>
						<ChatList {...this.props}/>
					</div>
					<div id='chat-interface'>
						<ChatInterface {...this.props}/>
					</div>
				</div>)
	}
}
