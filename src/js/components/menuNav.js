import React, { Component } from 'react';
import {socket, NAME, PHOTO} from '../main';


export class MenuNav extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		const {appstate} = this.props;
		const domComment = this.refs.domComment;
		const domUser = this.refs.domUser;
		this.changeList = this.changeList.bind(this);
		domComment.addEventListener('click', this.changeList, false);
		domUser.addEventListener('click', this.changeList, false);
	}
	changeList(e) {
		const domComment = this.refs.domComment;
		const domUser = this.refs.domUser;
		e = e || window.event;//这一行及下一行是为兼容IE8及以下版本
		var target = e.target || e.srcElement;
		const {changeList} = this.props;
		if(e.target) {
			if(e.target.getAttribute('data-mode') == 'comment') {
				changeList(true);
			} else if(e.target.getAttribute('data-mode') == 'user') {
				changeList(false);
			}
		}
	}
	render() {
		return (<div className="react-wrap">
							<ul>
								<li>
									<img src={PHOTO} />
								</li>
								<li ref="domComment" data-mode="comment">
									<i className="fa fa-comment" data-mode="comment"></i>
								</li>
								<li ref="domUser" data-mode="user">
									<i className="fa fa-user" data-mode="user"></i>
								</li>
							</ul>
						</div>);
	}
}