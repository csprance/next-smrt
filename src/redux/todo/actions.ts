import { createAction, createAsyncAction } from 'typesafe-actions';
import { AsyncThunkResult } from '../redux-types';
import { Todo } from './types';
import { addToDb } from './utils';

export const addTodo = createAsyncAction(
  'todo/REQUEST',
  'todo/SUCCESS',
  'todo/FAILED'
)<void, any[], string>();
export const addTodoThunk = (
  todo: Todo
): AsyncThunkResult<void> => async dispatch => {
  // Tell Redux were requesting data from the db
  dispatch(addTodo.request());
  try {
    // Do the actual request
    dispatch(addTodo.success(await addToDb(todo)));
  } catch (err) {
    // Catch the err
    dispatch(addTodo.failure(err.toString()));
  }
};

export const removeTodo = createAction(
  'todo/REMOVE_ACTION',
  resolve => (id: number) => resolve(id)
);

export const toggleComplete = createAction(
  'todo/TOGGLE_COMPLETE',
  resolve => (id: number) => resolve(id)
);
