import React, { Component } from 'react';
import {socket, NAME, PHOTO} from '../../main';

export class InterfaceFooterMobile extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		this.hideEmoji();
		this.initEmoji();
		//初始化表情点击事件
		const emoji = this.refs.emoji;
		this.showHideEmoji = this.showHideEmoji.bind(this);
		emoji.addEventListener('click', this.showHideEmoji,false);
		//初始化表情点击事件
		const emojiContainer = this.refs.emojiContainer;
		this.chooseEmoji = this.chooseEmoji.bind(this);
		emojiContainer.addEventListener('click', this.chooseEmoji,false);
		//初始化发送消息事件
		const sendMsg = this.refs.sendMsg;
		this.sendMessage  = this.sendMessage.bind(this);
		sendMsg.addEventListener('click', this.sendMessage, false);
		//初始化inputarea相关事件
		const inputarea = this.refs.inputarea;
		this.quicksend = this.quicksend.bind(this);
		this.hideEmoji = this.hideEmoji.bind(this);
		inputarea.addEventListener('click', this.hideEmoji, false);
		inputarea.addEventListener('keydown', this.quicksend, false);
	}
	quicksend(e){
		if(e.ctrlKey && (e.keyCode == 13)) {
			this.sendMessage();
		}
	}
	initEmoji() {
		let emojiContainer = document.getElementById('emoji-container');
		let emojiFrag = document.createDocumentFragment();
		for (var i = 16; i > 0; i--) {
            let emojiItem = document.createElement('img');
            emojiItem.src = 'img/emoji/' + i + '.gif';
            emojiFrag.appendChild(emojiItem);
        };
        emojiContainer.appendChild(emojiFrag); 	
	}
	sendMessage() {
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
			inputarea.appendChild(e.target.cloneNode());
			this.hideEmoji();
	    }
	}
	showHideEmoji() {
		const emojiContainer = this.refs.emojiContainer;
		if(emojiContainer.style.display == "none")
			emojiContainer.style.display = "";
		else
			emojiContainer.style.display = "none";
	}
	showEmoji() {
		const emojiContainer = this.refs.emojiContainer;
		if(emojiContainer.style.display == "none")
			emojiContainer.style.display = "";
	}
	hideEmoji() {
		const emojiContainer = this.refs.emojiContainer;
		if(emojiContainer.style.display != "none")
			emojiContainer.style.display = "none";
	}
	render() {
		return (<div id='interface-footer-mobile'>
					<i className='icon iconfont icon-iconfontemoji' ref='emoji'></i>
					<div className="emoji-container" id='emoji-container' ref='emojiContainer'></div>
					<div contentEditable='true' className="chat-inputarea" ref='inputarea'>
					</div>
					<div className='interface-footer-send' ref='sendMsg'>发送</div>
				</div>)
	}
}