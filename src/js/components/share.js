import React, { Component } from 'react';
import {socket, NAME, isPC} from '../main';

export class Share extends Component {
	constructor(props) {
	    super(props);
	}
	render() {
		const {appState:{componentZIndex:{share}}} = this.props;
		return (<div id='share' style={{zIndex: share}}>
			share
			</div>)
	}
}
