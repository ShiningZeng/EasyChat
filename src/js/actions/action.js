export const ADD_RECORD="ADD_RECORD"
export const RED="RED"

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
