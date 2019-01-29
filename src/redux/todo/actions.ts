import { createAsyncAction } from 'typesafe-actions';
import { AsyncThunkResult } from '../redux-types';
import { Todo } from './types';
import {
  addTodoToDb,
  bootStrapTodoDb,
  getTodosFromDb,
  removeTodoFromDb,
  toggleTodoInDb
} from './utils';

export const hydrateTodosFromDB = createAsyncAction(
  'todo/HYDRATE_REQUEST',
  'todo/HYDRATE_SUCCESS',
  'todo/HYDRATE_FAILED'
)<void, any[], string>();
export const hydrateTodosFromDBThunk = (): AsyncThunkResult<
  void
> => async dispatch => {
  // Tell Redux were requesting data from the db
  dispatch(hydrateTodosFromDB.request());
  try {
    // Do the actual request
    bootStrapTodoDb();
    dispatch(hydrateTodosFromDB.success(getTodosFromDb()));
  } catch (err) {
    // Catch the err
    dispatch(hydrateTodosFromDB.failure(err.toString()));
  }
};

export const addTodo = createAsyncAction(
  'todo/ADD_REQUEST',
  'todo/ADD_SUCCESS',
  'todo/ADD_FAILED'
)<void, any[], string>();
export const addTodoThunk = (
  todo: Todo
): AsyncThunkResult<void> => async dispatch => {
  // Tell Redux were requesting data from the db
  dispatch(addTodo.request());
  try {
    // Do the actual request
    addTodoToDb(todo);
    dispatch(addTodo.success(getTodosFromDb()));
  } catch (err) {
    // Catch the err
    dispatch(addTodo.failure(err.toString()));
  }
};

export const removeTodo = createAsyncAction(
  'todo/REMOVE_REQUEST',
  'todo/REMOVE_SUCCESS',
  'todo/REMOVE_FAILED'
)<void, Todo[], string>();
export const removeTodoThunk = (
  id: number
): AsyncThunkResult<void> => async dispatch => {
  // Tell Redux were requesting data from the db
  dispatch(removeTodo.request());
  try {
    // Do the actual request
    removeTodoFromDb(id);
    dispatch(removeTodo.success(getTodosFromDb()));
  } catch (err) {
    // Catch the err
    dispatch(removeTodo.failure(err.toString()));
  }
};

export const toggleTodo = createAsyncAction(
  'todo/TOGGLE_REQUEST',
  'todo/TOGGLE_SUCCESS',
  'todo/TOGGLE_FAILED'
)<void, Todo[], string>();
export const toggleTodoThunk = (
  id: number
): AsyncThunkResult<void> => async dispatch => {
  // Tell Redux were requesting data from the db
  dispatch(toggleTodo.request());
  try {
    // Do the actual request
    toggleTodoInDb(id);
    dispatch(toggleTodo.success(getTodosFromDb()));
  } catch (err) {
    // Catch the err
    dispatch(toggleTodo.failure(err.toString()));
  }
};
