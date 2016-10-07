
//record
export const ADD_RECORD="ADD_RECORD";

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
    dispatch(add_record(room,username,text,time));
  }
}

//userlist
export const ADD_USER="ADD_USER";

export function add_user(username,sex) {
  return {
    type: ADD_USER,
    user: {
      username,
      sex,
      record:[],
      DOM:[],
      unread:0
    }
  }
}

export function addUser(username,sex,record) {
  return (dispatch, getState) =>{
    dispatch(add_user(username,sex,record));
  }
}

  
export const CHANGE_ROOM="CHANGE_ROOM";

export function change_room(username) {
  return {
    type: CHANGE_ROOM,
    username
  }
}

export function changeRoom(username) {
  return (dispatch, getState) =>{
    dispatch(change_room(username));
  }
}

export const CHANGE_UNREAD="CHANGE_UNREAD";

export function change_unread(username) {
  return {
    type: CHANGE_UNREAD,
    username
  }
}

export function changeUnread(username) {
  return (dispatch, getState) =>{
    dispatch(change_unread(username));
  }
}