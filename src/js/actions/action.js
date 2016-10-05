

//record
export const ADD_RECORD="ADD_RECORD"

export function add_record(text){
  return {
    type:ADD_RECORD,
    text
  }
}

export function addRecord(text){
  return (dispatch,getState) =>{
    //const {counter}=getState()
    dispatch(add_record(text));
  }
}

//userlist
export const ADD_USER="ADD_USER"

export function add_user(username) {
	return {
		type:ADD_USER,
		username
	}
}

export function addUser(username) {
	return (dispatch, getState) =>{
		dispatch(add_user(username));
	}
}
