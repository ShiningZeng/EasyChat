import React, { Component } from 'react';
import {ChatInterface} from './chatInterface';
import {store, socket} from '../main';


// class Test extends Component {
// 	constructor(props) {
// 		 super(props);
// 		 console.log(this)
// 	}
// 	render() {
// 		return (<span>sdsd</span>)
// 	}
// }






export class App extends Component {
	constructor(props) {
	    super(props);
	}
	componentDidMount() {
		console.log(this)
	}
	handleClick(){
		const {ince,dece,counter} = this.props;
		ince();
	}
	render() {
		const {ince,dece,counter} = this.props;
		return (<div className='react-wrap'>
					<div id='menu-nav'>
						<div>
							{counter}
						</div>
						<input type="button" onClick={this.handleClick.bind(this)} value="++++++++++" />
					</div>
					<div id='chatting-list'>
					</div>
					<div id='chat-interface'>
						<ChatInterface {...this.props}/>
					</div>
				</div>)
	}
}