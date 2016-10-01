import React, { Component } from 'react';
import {ChatInterface} from './chatInterface';
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
					<div id='chatting-list'>
					</div>
					<div id='chat-interface'>
						<ChatInterface {...this.props}/>
					</div>
				</div>)
	}
}
