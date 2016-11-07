import React, { Component } from 'react';
import {socket, NAME, isPC} from '../../main';

export class InterfaceHeader extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		if(!isPC) {
			const {changeState} = this.props;
			const left = this.refs.left;
			left.addEventListener('click', function(){changeState('chatList')}.bind(this), false);
		}
	}
	render() {
		const {users:{current, count, chatList}} = this.props;
		if(isPC) {
			return (<div id='interface-header'>
					<p>
						<span>
							{current}
						</span>
						{chatList[current].type == "PUBLIC" ? (<span className="online-state"> 在线人数({count})</span>) : null}
					</p>
				</div>)
		} else {
			return (<div id='interface-header' className='moblie'>
						<i id='goback' className='icon iconfont icon-left' ref='left'></i>
						<span>
							{current}
						</span>
				</div>)
		}
		
	}
}