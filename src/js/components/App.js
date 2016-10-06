import React, { Component } from 'react';
import {ChatInterface} from './chatInterface';
import {ChatList} from './chatList';
import {socket, NAME} from '../main';


export class App extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		const {users, addUser,addRecord} = this.props;
		socket.on('newMsg', (name, msg) => {
			const {addRecord} = this.props;
		    addRecord("zxl",name,msg,new Date())
		});
		
		
		addUser("zxl","boy");
		addUser("cmm","girl");
		addRecord("zxl","zxl","hh","2016");
		addRecord("zxl","zxl","hh","2016");
		addRecord("zxl","zxl","hh","2016");
	}
	render() {
		// const {users, addUser} = this.props;
		// console.log(users);
		return (<div className='react-wrap'>
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
