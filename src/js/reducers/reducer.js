import {combineReducers} from "Redux"
import { ADD_RECORD, RED } from '../actions/action'


function record(state= [],action){
	switch(action.type){
		case ADD_RECORD:
			return [...state,
					{
			        	text: action.text,
			        }];
		default:return state;
	}
}
const rootReducer=combineReducers({ 
	record
})
export default rootReducer;