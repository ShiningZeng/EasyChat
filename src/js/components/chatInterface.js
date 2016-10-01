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
		    this._record.push(<li key={this._record.length}>{msg}</li>)
		    addRecord();
		});
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
							<li className='chat-record-list-left'>
								<img src="" />
								<div>
									<span>username</span>
									<p>
										<span className="triangle-in"></span>
										<span className="triangle-out"></span>
										English is a West Germanic language that was first spoken in early medieval England and is now a global lingua fran...
									</p>
								</div>
							</li>
							<li className='chat-record-list-left'>
								<img src="" />
								<div>
									<span>username</span>
									<p>
										<span className="triangle-in"></span>
										<span className="triangle-out"></span>
										English is guag
									</p>
								</div>
							</li>
							<li className='chat-record-list-right'>
								<img src="" />
								<div>
									<span>username</span>
									<p>
										<span className="triangle-in"></span>
										<span className="triangle-out"></span>
										English is guag
									</p>
								</div>
							</li>
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
