import { combineReducers } from 'redux';
import app from './app';
import tasks from './tasks';

const reducers = combineReducers({
  app,
  tasks,
});

export default reducers;
