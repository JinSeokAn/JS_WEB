import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import logger from 'redux-logger'

const middleware = [logger]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;

// const redux = require('redux');
// const createStore = redux.createStore;
// const reduxLogger = require('redux-logger');
// const applyMiddleware = redux.applyMiddleware;
// const logger = reduxLogger.createLogger();
// const combineReducer = redux.combineReducers;


// //actions types
// const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER'
// const ADD_VIEWCOUNT = 'ADD_VIEWCOUNT'
// //actions
// export const addSubscriber = () => {
//   return {
//     type: ADD_SUBSCRIBER
//   }
// }

// export const addViewCount = () => {
//   return {
//     type: ADD_VIEWCOUNT
//   }
// }

// // reducers - handling
// const subScribersState = {
//   subScribers : 365
// }
// const viewState = {
//   viewCount : 100
// }


// const viewReducer = (state = viewState, action) => {
//   switch(action.type){
//     case ADD_VIEWCOUNT :
//       return {
//         ...state,
//         viewCount : state.viewCount + 1
//       }
//     default: return state;
//   }
// }
// const subScribeReducer = (state = subScribersState, action) => {
//   switch(action.type){
//     case ADD_SUBSCRIBER :
//       return {
//         ...state,
//         subScribers : state.subScribers + 1
//       }
//     default: return state;
//   }
// }

// const rootReducer = combineReducer({
//   view : viewReducer,
//   subscribe : subScribeReducer
// })


// //store
// export const store = createStore(rootReducer, applyMiddleware(logger))

// store.dispatch(addSubscriber())
// store.dispatch(addSubscriber())

// store.dispatch(addViewCount())
// store.dispatch(addViewCount())