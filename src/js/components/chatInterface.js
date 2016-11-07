import React, { Component } from 'react';
import {InterfaceHeader} from './chatInterface/interfaceHeader';
import {InterfaceBody} from './chatInterface/interfaceBody';
import {InterfaceFooter} from './chatInterface/interfaceFooter';
import {InterfaceFooterMobile} from './chatInterface/InterfaceFooter-Mobile';

import {socket, NAME, isPC} from '../main';

export class ChatInterface extends Component {
	constructor(props) {
	    super(props);
	}
	render() {
		const {appState:{componentZIndex:{chatInterface}, curState}} = this.props;
		const style = {
			zIndex: chatInterface,
		}
		if(!isPC)
			style.right = curState!='chatInterface' ? '-100%' : 0;
		return (<div id='chat-interface' style={style}>
				<InterfaceHeader {...this.props}/>
				<InterfaceBody {...this.props}/>
				{isPC ? <InterfaceFooter {...this.props}/> : <InterfaceFooterMobile {...this.props}/>}
				
			</div>)
	}
}
