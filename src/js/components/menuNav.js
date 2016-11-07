import React, { Component } from 'react';
import {socket, NAME, PHOTO, isPC} from '../main';


export class MenuNav extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		const funcMode = this.refs.funcMode;
		this.changeState = this.changeState.bind(this);
		funcMode.addEventListener('click', this.changeState, false);
	}
	changeState(e) {
		const domComment = this.refs.domComment;
		const domUser = this.refs.domUser;
		e = e || window.event;//这一行及下一行是为兼容IE8及以下版本
		var target = e.target || e.srcElement;
		const {changeState} = this.props;
		if(e.target) {
			switch(e.target.getAttribute('data-mode')) {
				case 'chat': changeState('chatList'); break;
				case 'user': changeState('friendList'); break;
				case 'share': changeState('share'); break;
				case 'individual': changeState('individual'); break;
			}
		}
	}
	render() {
		return (<div id='menu-nav'>
					<ul ref="funcMode">
						{isPC ? <li>
								<img src={PHOTO} />
							</li> : null}

						<li ref="domComment" data-mode="chat">
							<i className="icon iconfont icon-chat" data-mode="chat"></i>
						</li>
						<li ref="domUser" data-mode="user">
							<i className="icon iconfont icon-friendl01" data-mode="user"></i>
						</li>
						<li data-mode="share">
							<i className="icon iconfont icon-footfound" data-mode="share"></i>
						</li>
						<li data-mode="individual">
							<i className="icon iconfont icon-iconsetting" data-mode="individual"></i>
						</li>
					</ul>
				</div>);
	}
}