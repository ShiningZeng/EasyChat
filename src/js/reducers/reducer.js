import {combineReducers} from "Redux";
import { ADD_RECORD, ADD_USER} from '../actions/action';
import React from 'react';
import {NAME} from '../main';

const initState = {
	_userlist:[]
}

function recordToDom(record, key) {
 	const username = record.username;
 	const time = record.time;
 	const text = record.text;
 	const imgsrc = '';
	let classname = 'chat-record-list-left';
	if (username == NAME)
	    classname = 'chat-record-list-right'
	return (<li className = {classname} key = {key}>
				<img src={imgsrc} />
				<div>
					<span>{username}</span>
					<p>
						<span className="triangle-in"></span>
						<span className="triangle-out"></span>
						{text}
					</p>
				</div>
			</li>)
}



function users(state=initState, action) {
	switch(action.type) {
		case ADD_USER:
			const temp = {};
			temp[action.user.username] = action.user;
			return Object.assign({}, state, temp, {
				_userlist: [...state._userlist,action.user.username]
			});
		case ADD_RECORD:
			console.log("b");
			const temp1 = {};
			const room = action.record.room;
			const utemp = Object.assign({}, state[room]);
			utemp.record = [...(utemp.record), action.record];
			console.log(utemp.DOM,action.record,utemp.record.length);
			utemp.DOM = [...(utemp.DOM),recordToDom(action.record, utemp.record.length)];
			temp1[room] = utemp;
			return Object.assign({}, state, temp1);
		default:return state;
	}
}


const rootReducer=combineReducers({ 
	users
})
export default rootReducer;