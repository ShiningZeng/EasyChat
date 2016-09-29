// import {applyMiddleware, bindActionCreators, combineReducers, createStore} from 'Redux';

import {applyMiddleware,createStore} from "Redux";
import thunk from "redux-thunk";
import reducer from "./reducers/reducer.js"

const createStoreWithMiddleware=applyMiddleware(thunk)(createStore)

export default function configureStore(initialStore){
  const store=createStoreWithMiddleware(reducer,initialStore);
  return store;
}
