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
		//socket连接成功提示
		socket.on('connect', function(){
			console.log('connect success');
			socket.emit('user join',{username: NAME});
		});
		const {users, addUser, addRecord, changeUnread, systemBroadcast, users:{chatList}} = this.props;
		addUser({
			username:NAME,
			photo:PHOTO
		})
		socket.on('resMsg', (data) => {
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
		//处理添加好友的请求
		socket.on('resAddFri', (data) => {
			// receiveAddFri.className = receiveAddFri.className.replace(" d-hidden", "");
			const {changeFristate, changeRoom, addUser, users:{chatList, userlist}} = this.props;
				let flag = true;
				userlist.forEach(function(_username){
					if(_username == data.source)
						flag = false;
				})
				if(flag) {
					addUser({
						username: data.source,
						photo: data.photo
					});
				}
			changeFristate({
				username: data.source,
				fristate: 'procedure'
			})
		});
		socket.on('addFriSuccess', (data) => {
			const {addFriend, changeFristate, users:{chatList}} = this.props;
			const friend = {
				username:data.source,
				photo: chatList[data.source].photo
			};
			changeFristate({
				username: data.source,
				fristate: 'yes'
			})
			addFriend(friend);
		});
		socket.on('systemBroadcast', (msg) => {
			console.log(msg)
			systemBroadcast(msg);
		})
		
	}
	handlekeypress() {
	}
	initFriendList() {
		const {addFriend} = this.props;
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
					let data = JSON.parse(xhr.responseText);
					data.forEach(function(friend) {
							addFriend(friend);
							console.log(friend);
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
					<MenuNav {...this.props}/>
					<ChatList {...this.props}/>
					<ChatInterface {...this.props}/>
				</div>)
	}
}
