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
		const {addUser} = this.props;
		addUser({
			username:NAME,
			photo:PHOTO
		})
		socket.on('resMsg', (data) => {
			const {users, addUser, addRecord, changeUnread} = this.props;
			if(!users[data.room])
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
