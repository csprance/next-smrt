import { createSelector } from 'reselect';

import { RootState } from '../redux-types';

export const rehydratedSelector = (store: any) => {
  if (store._persist) {
    return store._persist.rehydrated;
  }
  return false;
};

export const todoSelector = (state: RootState, _props?: any) => state.todo;

export const completedTodosSelector = createSelector(
  todoSelector,
  todos => todos.filter(todo => todo.completed)
);

export const unfinishedTodosSelector = createSelector(
  todoSelector,
  todos => todos.filter(todo => !todo.completed)
);
