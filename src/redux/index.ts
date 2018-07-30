import { combineReducers } from 'redux';
import { reducer as persist, PersistState } from './persist';
import { reducer as system, SystemState } from './system';
import { reducer as db, DbState } from './db';

export const reducer = combineReducers<RootState>({
  persist,
  db,
  system
});

export interface RootState {
  persist: PersistState;
  db: DbState;
  system: SystemState;
}
