// The db reducer
import { ActionType, getType } from 'typesafe-actions';
import * as dbActions from './db-actions';
import { default as defaultState } from './db-state';
import { DbState as ReduxDbState } from './db-types';

export type DbState = ReduxDbState;
export type DbActions = ActionType<typeof dbActions>;

export const reducer = (
  state: DbState = defaultState,
  action: DbActions
): DbState => {
  switch (action.type) {
    case getType(dbActions.queryDb.request):
      return { ...state, query: action.payload, querying: true };
    case getType(dbActions.queryDb.success):
      return { ...state, results: action.payload, querying: false };
    case getType(dbActions.queryDb.failure):
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
