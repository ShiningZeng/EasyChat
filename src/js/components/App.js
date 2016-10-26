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
		//添加自己到用户列表
		const {addUser} = this.props;
		addUser({
			username:NAME,
			photo:PHOTO
		})
		//处理接收到的消息
		socket.on('resMsg', (data) => {
			const {addUser,addRecord,changeUnread, users:{chatList}} = this.props;
			if(!chatList[data.room]) {
				addUser({
					username: data.room,
					photo: data.imgsrc
				});
			}
				
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
			const {changeFristate, addUser, users:{userlist}} = this.props;
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
		//处理添加好友成功后的请求
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
		//处理全局广播事件
		socket.on('systemBroadcast', (msg) => {
			const {systemBroadcast} = this.props;
			console.log(msg)
			systemBroadcast(msg);
		})
		
	}
	initFriendList() {
		//向服务器请求好友列表
		const xhr = new XMLHttpRequest();
		const that = this;
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
					const {addFriend} = that.props;
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
		return (<div className='react-wrap'>
					<MenuNav {...this.props}/>
					<ChatList {...this.props}/>
					<ChatInterface {...this.props}/>
				</div>)
	}
}
