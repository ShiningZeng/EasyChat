import {combineReducers} from "Redux";
import { ADD_RECORD, ADD_USER} from '../actions/action';


function record(state= [],action){
	switch(action.type){
		case ADD_RECORD:
			return [...state, {
			        	text: action.text,
			        }];
		default:return state;
	}
}

function users(state={}, action) {
	switch(action.type) {
		case ADD_USER:
			const temp = new Object()
			temp[action.username] = action.username;
			return Object.assign({}, state, temp);
		default:return state;
	}
}


const rootReducer=combineReducers({ 
	record,
	users
})
export default rootReducer;