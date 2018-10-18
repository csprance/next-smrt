import { combineReducers } from 'redux';
import { todoReducer as todo } from './todo';
import {RootState} from './redux-types';

export const reducer = combineReducers<RootState>({
  todo,
});
