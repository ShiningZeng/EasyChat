import React, { Component } from 'react';
import {ChatInterface} from './chatInterface';
import {ChatList} from './chatList';
import {socket, NAME} from '../main';


export class App extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		const {users, addUser} = this.props;
		
		addUser("zengxl");
		addUser("zengxls");
	}
	render() {
		const {users, addUser} = this.props;
		console.log(users);
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
