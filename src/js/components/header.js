import React, { Component } from 'react';
import {socket, NAME, isPC} from '../main';

export class Header extends Component {
	constructor(props) {
	    super(props);
	}
	render() {
		return (<div id='header'>
			<span>EasyChat</span>
			</div>)
	}
}
