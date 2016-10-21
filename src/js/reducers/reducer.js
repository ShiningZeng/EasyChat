import {combineReducers} from "Redux";
import {ADD_RECORD, ADD_USER, CHANGE_ROOM, CHANGE_UNREAD, ADD_FRIEND,
 CHANGE_LIST, CHANGE_FRISTATE, SYSTEM_BROADCAST} from '../actions/action';
import React from 'react';
import {NAME} from '../main';

const initState = {
	chatList: {
		公共聊天室: {
			username: "公共聊天室",
			type: 'PUBLIC',
			photo: "img/photo/public0.jpg",
			record: [],
			DOM: []
		}
	},
	userlist:["公共聊天室"],
	friends:{},
	friendList:[],
	current:'公共聊天室',
	count:0
}
//辅助函数
function transString(text) {
	if(typeof text == "object") {
		const temp = [];
		let key = "file"+parseInt(Math.random()*10);
		temp.push((<a href={text.filePath} download key={key}>{text.fileName}</a>));
		console.log(temp)
		return temp;
	} else if (typeof text == "string") {
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
		console.log(temp4)
		return temp4;
	}
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
						{transString(text)}
					</p>
				</div>
			</li>)
}

function users(state=initState, action) {
	switch(action.type) {
		case ADD_USER:
			const temp = Object.assign({}, state.chatList);
			temp[action.user.username] = action.user;
			return Object.assign({}, state, {
				chatList: temp
			}, {
				userlist: [...state.userlist,action.user.username]
			});
		case ADD_RECORD:
			const temp1 = Object.assign({}, state.chatList);
			const room = action.record.room;
			const utemp = Object.assign({}, state.chatList[room]);
			utemp.record = [...(utemp.record), action.record];
			utemp.DOM = [...(utemp.DOM),recordToDom(action.record, utemp.record.length)];
			temp1[room] = utemp;
			return Object.assign({}, state, {
				chatList: temp1
			});

		case CHANGE_ROOM:
			return Object.assign({}, state, {current:action.username});
		case CHANGE_UNREAD:
			const ctemp1 = Object.assign({}, state.chatList);
			const temp2 = Object.assign({}, state.chatList[action.username]);
			if(state.current != action.username)
				temp2.unread++;
			else
				temp2.unread = 0;
			ctemp1[action.username] = temp2;
			return Object.assign({}, state, {
				chatList: ctemp1
			});
		case ADD_FRIEND:
			const temp4 = Object.assign({}, state.friends);
			temp4[action.friend.username] = action.friend;
			return Object.assign({},state, {friends:temp4}, {friendList: [...state.friendList,action.friend.username]});
		case CHANGE_FRISTATE:
			const ctemp2 = Object.assign({}, state.chatList);
			ctemp2[action.fristate.username].fristate = action.fristate.fristate;
			return Object.assign({}, state, {chatList: ctemp2});
		case SYSTEM_BROADCAST:
			return Object.assign({}, state, {count: action.message.count});
		default: return state;
	}
}

const initState1 = {
	show: true
}

function appState(state = initState1, action) {
	switch(action.type) {
		case CHANGE_LIST:
			return Object.assign({}, state, {
				show: action.show
			})
		default: return state;
	}
}


const rootReducer=combineReducers({ 
	users,
	appState
})
export default rootReducer;