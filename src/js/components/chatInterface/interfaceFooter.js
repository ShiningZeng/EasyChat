import React, { Component } from 'react';
import {socket, NAME, PHOTO} from '../../main';

export class InterfaceFooter extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		this.showEmoji();
		this.initEmoji();
		//初始化表情点击事件
		const emoji = this.refs.emoji;
		this.showEmoji = this.showEmoji.bind(this);
		emoji.addEventListener('click', this.showEmoji,false);
		//初始化表情点击事件
		const emojiContainer = this.refs.emojiContainer;
		this.chooseEmoji = this.chooseEmoji.bind(this);
		emojiContainer.addEventListener('click', this.chooseEmoji,false);
		const send = this.refs.send;
		this.sendMessage  = this.sendMessage.bind(this);
		send.addEventListener('click', this.sendMessage, false);
	}
	initEmoji() {
		let emojiContainer = document.getElementById('emoji-container');
		let emojiFrag = document.createDocumentFragment();
		for (var i = 69; i > 0; i--) {
            let emojiItem = document.createElement('img');
            emojiItem.src = 'img/emoji/' + i + '.gif';
            emojiFrag.appendChild(emojiItem);
        };
        emojiContainer.appendChild(emojiFrag); 	
	}
	sendMessage() {
		//const ul =  this.refs.ul;
		document.getElementById('chatUl').style.bottom= "0px";
		const inputarea = this.refs.inputarea;
		let msg = inputarea.innerHTML;
		msg = msg.replace(/&amp;/g,'&')
				.replace(/<div>/g, '')
				.replace(/<\/div>/g, '')
				.replace(/<br>/g, '')
				.replace(/&gt;/g, '>')
				.replace(/&lt;/g, '<')
				.replace(/&nbsp;/g, ' ');
		if(msg.length) {
			const {users, users:{current}} = this.props;
			socket.emit('postMsg', {
				source:NAME,
				message: msg,
				room: current,
				imgsrc: PHOTO
			});
		}
		inputarea.innerHTML = '';
	}
	chooseEmoji(e) {
		e = e || window.event;//这一行及下一行是为兼容IE8及以下版本
		var target = e.target || e.srcElement;
		if(e.target && e.target.nodeName == 'IMG') {
			const inputarea = this.refs.inputarea;
			inputarea.appendChild(e.target.cloneNode())
			this.showEmoji();
	    }
	}
	showEmoji() {
		const emojiContainer = this.refs.emojiContainer;
		if(emojiContainer.style.display == "none")
			emojiContainer.style.display = "";
		else
			emojiContainer.style.display = "none";
	}

	render() {
		return (<div id='interface-footer'>
					<div className='interface-footer-multiFunc'>
						<ul>
							<li>
								<i className='fa fa-smile-o' ref='emoji'></i>
							</li>
							<li>
								<i className='fa fa-folder-open-o'></i>
							</li>
							<li>
								<i className='fa fa-scissors'></i>
							</li>
						</ul>
					</div>
					<div className="emoji-container" id='emoji-container' ref='emojiContainer'></div>
					<div contentEditable='true' className="chat-inputarea" ref='inputarea'>
					</div>
					<div className='interface-footer-send' ref='send'>发送</div>
				</div>)
	}
}