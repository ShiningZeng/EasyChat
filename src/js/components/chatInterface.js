import React, { Component } from 'react';
import {InterfaceHeader} from './chatInterface/interfaceHeader';
import {InterfaceBody} from './chatInterface/interfaceBody';
import {InterfaceFooter} from './chatInterface/interfaceFooter';
import {socket, NAME} from '../main';

export class ChatInterface extends Component {
	constructor(props) {
	    super(props);
	}
	render() {
		return (<div id='chat-interface'>
				<InterfaceHeader {...this.props}/>
				<InterfaceBody {...this.props}/>
				<InterfaceFooter {...this.props}/>
			</div>)
	}
}
