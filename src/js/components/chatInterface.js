import React, { Component } from 'react';
import {socket, NAME} from '../main';

export class ChatInterface extends Component {
	constructor(props) {
	    super(props);
	    this._record = [];
	}
	componentDidMount() {
		const that = this;
		const {addRecord, record} = this.props;
		socket.on('newMsg', (name, msg) => {
		    console.log(name, msg);
		    this._record.push(this.recordToDom(name, msg, '', this._record.length))
		    addRecord();
		});
	}
	recordToDom(username, msg, imgsrc, key) {
		let classname = 'chat-record-list-left';
		if (username == NAME)
			classname = 'chat-record-list-right'
		return (<li className = {classname} key = {key}>
					<img src={imgsrc} />
					<div>
						<span>{username}</span>
						<p>
							<span className="triangle-in"></span>
							<span className="triangle-out"></span>
							{msg}
						</p>
					</div>
				</li>)
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
		return (<div className='react-wrap'>
					<div className='interface-header'>
					</div>
					<div className='interface-body'>
						<ul ref="ul">
							{this._record}
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
