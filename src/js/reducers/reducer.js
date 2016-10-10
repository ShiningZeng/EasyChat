import {combineReducers} from "Redux";
import {ADD_RECORD, ADD_USER, CHANGE_ROOM, CHANGE_UNREAD, ADD_FRIEND, GET_FRIEND} from '../actions/action';
import React from 'react';
import {NAME} from '../main';

const initState = {
	公共聊天室: {
		username: "公共聊天室",
		photo: "img/photo/public0.jpg",
		record: [],
		DOM: []
	},
	userlist:["公共聊天室"],
	fiendlist:[],
	current:'公共聊天室'
}
//辅助函数
function getImg(text) {
	//var text = "<img src=\"20.gif\">A<img src=\"img\/emoji\/20.gif\">B<img src=\"20.gif\">C<img src=\"20.gif\">D";
	const reg = /<img src="[0-9a-zA-Z\/]{0,20}\.gif">/igm;
	const temp1 = text.split(reg) || [];//获取文本字符
	const temp2 = text.match(reg) || [];//获取图片字符
	const temp3 = [];//提取图片src
	const temp4 = [];//生成dom
	for (let i in temp2){
		temp3.push(temp2[i].split('"')[1]);
	}
	for(let i in temp1) {
		temp4.push(temp1[i])
		if(temp3[i]) {
			temp4.push((<img src={temp3[i]} key={i}/>));
		}
	}
	return temp4;
}
//辅助函数
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
						{getImg(text)}
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
		case ADD_FRIEND:
			return state;
		case GET_FRIEND:
			return state;
		default:return state;
	}
}




const rootReducer=combineReducers({ 
	users,
})
export default rootReducer;