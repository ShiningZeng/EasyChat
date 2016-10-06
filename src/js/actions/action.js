 

//record
export const ADD_RECORD="ADD_RECORD"

export function add_record(room,username,text,time){
  return {
    type: ADD_RECORD,
    record: {
      room,
      username,
      text,
      time
    }
  }
}

export function addRecord(room,username,text,time){
  return (dispatch,getState) =>{
    //const {counter}=getState()
    dispatch(add_record(room,username,text,time));
  }
}

//userlist
export const ADD_USER="ADD_USER"

export function add_user(username,sex) {
	return {
		type: ADD_USER,
		user: {
      username,
      sex,
      record:[],
      DOM:[]
    }
	}
}

export function addUser(username,sex,record) {
	return (dispatch, getState) =>{
		dispatch(add_user(username,sex,record));
	}
}
