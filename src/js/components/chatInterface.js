import React, { Component } from 'react';
import {socket, NAME} from '../main';

export class ChatInterface extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		const that = this;
		
		
	}
	sendMessage() {
		let textDom = document.getElementsByTagName('textarea')[0];
		const msg = textDom.value;
		if(msg) {
			socket.emit('postMsg', NAME, msg);
		}
		textDom.value = '';
	}
	render() {
		const {users} = this.props;
		let t = users["zxl"];
		return (<div className='react-wrap'>
					<div className='interface-header'>
						<h1>test</h1>
					</div>
					<div className='interface-body'>
						<ul ref="ul">
							{t?t.DOM:[]}
						</ul>
					</div>
					<div className='interface-footer'>
						<textarea>
						</textarea>
						<button onClick={this.sendMessage.bind(this)}>send</button>
					</div>
				</div>)
	}
}
