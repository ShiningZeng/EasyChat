import React, { Component } from 'react';
import {socket, NAME, PHOTO} from '../main';


export class MenuNav extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {

	}
	render() {
		return (<div className="react-wrap">
							<ul>
								<li>
									<img src={PHOTO} />
								</li>
								<li>
									<i className="fa fa-comment"></i>
								</li>
								<li>
									<i className="fa fa-user"></i>
								</li>
							</ul>
						</div>);
	}
}