import { combineReducers } from 'redux';
import { reducer as persist, PersistState } from './persist';
import { reducer as system, SystemState } from './system';
import { reducer as todo, TodoState } from './todo';

export const reducer = combineReducers<RootState>({
  persist,
  todo,
  system
});

export interface RootState {
  persist: PersistState;
  todo: TodoState;
  system: SystemState;
}
