import { createSelector } from 'reselect';

import { RootState } from '../redux-types';

export const todoSelector = (state: RootState, _props?: any) => state.todo;

export const completedTodosSelector = createSelector(
  todoSelector,
  todos => todos.filter(todo => todo.completed)
);

export const unfinishedTodosSelector = createSelector(
  todoSelector,
  todos => todos.filter(todo => !todo.completed)
);
