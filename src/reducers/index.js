import { combineReducers } from 'redux';
import app from './app';
import todo from './todo';

const reducers = combineReducers({
  app,
  todo,
});

export default reducers;
