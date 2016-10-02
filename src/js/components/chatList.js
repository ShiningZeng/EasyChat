import React, { Component } from 'react';
import {socket, NAME} from '../main';

export class ChatList extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
	}
	render() {
		return (<div className='react-wrap'>
					<div className='user-search'>
					</div>
					<ul className='user-list'>
						<li className='public-room'>
							<img src='' />
							<span>username</span>
							<p>msg</p>
						</li>
						<li className='private-room'>
							<img src='' />
							<span>username</span>
							<p>msg</p>
						</li>
					</ul>
				</div>)
	}
}
