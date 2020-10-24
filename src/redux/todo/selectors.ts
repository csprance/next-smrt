import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../index';

export const todoSelector = (state: RootState, _props?: any) => state.todo;

export const completedTodosSelector = createSelector(todoSelector, (todos) =>
  todos.filter((todo) => todo.completed)
);

export const unfinishedTodosSelector = createSelector(todoSelector, (todos) =>
  todos.filter((todo) => !todo.completed)
);

export const propsIdSelector = (
  state: RootState,
  props: { id: number } & any
) => props.id;

export const todoByIdSelector = createSelector(
  todoSelector,
  propsIdSelector,
  (todos, id) => todos.find((todo) => todo.id === id)
);
