import React, { Component } from 'react';
import {ChatInterface} from './chatInterface';
import {ChatList} from './chatList';
import {socket, NAME} from '../main';


export class App extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		
	}
	render() {
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
