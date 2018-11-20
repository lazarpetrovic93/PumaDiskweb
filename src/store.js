import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import sneakerReducer from './reducers/sneakerReducer';

export default createStore(
  combineReducers({
   sneakers: sneakerReducer
  }),{}, applyMiddleware(logger, thunk));