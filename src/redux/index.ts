import { combineReducers } from 'redux';
import { RootState } from './redux-types';
import todo from './todo';

export const reducer = combineReducers<RootState>({
  todo
});
