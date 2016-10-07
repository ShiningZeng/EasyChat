import React, { Component } from 'react';
import {ChatInterface} from './chatInterface';
import {ChatList} from './chatList';
import {socket, NAME} from '../main';


export class App extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		
		socket.on('resMsg', (data) => {
			const {users, addUser, addRecord, changeUnread} = this.props;
			if(!users[data.target])
				addUser(data.target, "boy");
		    addRecord(data.target, data.source, data.message, new Date());
		    //changeUnread(data.target);
		});
		
		// const {users, addUser,addRecord} = this.props;
		// addUser("zxl","boy");
		// addUser("cmm","girl");
		// addRecord("zxl","zxl","hh","2016");
		// addRecord("zxl","zxl","hh","2016");
		// addRecord("zxl","zxl","hh","2016");
	}
	handlekeypress() {
		console.log("hhh")
	}
	render() {
		return (<div className='react-wrap' onKeyPress={this.handlekeypress}>
					<div id='menu-nav'>
						<div>
						</div>
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
