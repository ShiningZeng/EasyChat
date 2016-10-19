
//record
export const ADD_RECORD="ADD_RECORD";

const defaultRecord = {
      room: "",
      username: "",
      text: "",
      photo: "",
      time: ""
    };
export function add_record(record){
  return {
    type: ADD_RECORD,
    record: Object.assign({}, defaultRecord, record)
  }
}

export function addRecord(record){
  return (dispatch,getState) =>{
    dispatch(add_record(record));
  }
}

//userlist
export const ADD_USER="ADD_USER";
const defaultUser = {
      username:"",
      sex:"",
      photo:"",
      record:[],
      DOM:[],
      unread:0
    };
export function add_user(user) {
  return {
    type: ADD_USER,
    user: Object.assign({},defaultUser, user)
  }
}

export function addUser(user) {
  return (dispatch, getState) =>{
    dispatch(add_user(user));
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



export const ADD_FRIEND = "ADD_FRIEND";

const defaultFriend = {
  username:'',
  sex:'',
  photo:''
}

export function add_friend(friend) {
  return {
    type: ADD_FRIEND,
    friend: Object.assign({}, defaultFriend, friend)
  }
}

export function addFriend(friend) {
  return (dispatch, getState) =>{
    dispatch(add_friend(friend));
  }
}

export const CHANGE_LIST = "CHANGE_LIST";

export function change_list(show) {
  return {
    type: CHANGE_LIST,
    show
  }
}

export function changeList(show) {
  return (dispatch, getState) =>{
    dispatch(change_list(show));
  }
}


