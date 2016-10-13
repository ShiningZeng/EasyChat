import React, { Component } from 'react';
import {socket, NAME} from '../../main';

export class InterfaceHeader extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {

	}
	render() {
		const {users:{current}} = this.props;
		return (<div id='interface-header'>
					<p><span>{current}</span></p>
				</div>)
	}
}