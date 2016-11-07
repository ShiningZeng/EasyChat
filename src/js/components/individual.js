import React, { Component } from 'react';
import {socket, NAME, isPC} from '../main';

export class Individual extends Component {
	constructor(props) {
	    super(props);
	}
	render() {
		const {appState:{componentZIndex:{individual}}} = this.props;
		return (<div id='individual' style={{zIndex: individual}}>
			individual
			</div>)
	}
}
