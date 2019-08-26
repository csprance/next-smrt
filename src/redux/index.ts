import { combineReducers } from 'redux';

import app from './app';
import todo from './todo';

export const rootReducer = combineReducers({
  app,
  todo
});
