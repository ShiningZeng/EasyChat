import {combineReducers} from "Redux";
import {ADD_RECORD, ADD_USER, CHANGE_ROOM, CHANGE_UNREAD} from '../actions/action';
import React from 'react';
import {NAME} from '../main';

const initState = {
	publicRoom: {
		username: "publicRoom",
		photo: "",
		record: [],
		DOM: []
	},
	userlist:["publicRoom"],
	current:'publicRoom'
}

function recordToDom(record, key) {
 	const username = record.username;
 	const time = record.time;
 	const text = record.text;
 	const imgsrc = record.photo;
	let classname = 'chat-record-list-left';
	if (username == NAME)
	    classname = 'chat-record-list-right'
	return (<li className = {classname} key = {key}>
				<img src={imgsrc} data-username = {username}/>
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
				userlist: [...state.userlist,action.user.username]
			});
		case ADD_RECORD:
			const temp1 = {};
			const room = action.record.room;
			const utemp = Object.assign({}, state[room]);
			utemp.record = [...(utemp.record), action.record];
			utemp.DOM = [...(utemp.DOM),recordToDom(action.record, utemp.record.length)];
			temp1[room] = utemp;
			return Object.assign({}, state, temp1);

		case CHANGE_ROOM:
			return Object.assign({}, state, {current:action.username});
		case CHANGE_UNREAD:
			const temp2 = Object.assign({}, state[action.username]);
			if(state.current != action.username)
				temp2.unread++;
			else
				temp2.unread = 0;
			const temp3 = {};
			temp3[action.username] = temp2;
			return Object.assign({}, state, temp3);
		default:return state;
	}
}




const rootReducer=combineReducers({ 
	users,
})
export default rootReducer;