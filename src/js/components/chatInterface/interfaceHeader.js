import React, { Component } from 'react';
import {socket, NAME} from '../../main';

export class InterfaceHeader extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		
	}
	
	render() {
		const {users:{current, count, chatList}} = this.props;
		return (<div id='interface-header'>
					<p><span>{current}</span>{chatList[current].type == "PUBLIC" ? (<span className="online-state"> 在线人数({count})</span>) : null}</p>
					
				</div>)
	}
}