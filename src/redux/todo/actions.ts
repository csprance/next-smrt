import { createAction, createAsyncAction } from 'typesafe-actions';

import { AsyncThunkResult } from '../redux-types';
import { Todo } from './types';
import { doSomethingAsync } from './utils';

export const addTodo = createAsyncAction(
  'todo/REQUEST',
  'todo/SUCCESS',
  'todo/FAILED'
)<void, Todo, string>();
export const addTodoThunk = (
  todo: Todo
): AsyncThunkResult<void> => async dispatch => {
  // Tell Redux were requesting data from the db
  dispatch(addTodo.request());
  try {
    // Do the actual request
    const mutatedTodo = await doSomethingAsync(todo);
    // Dispatch the mutated todo with the async data
    dispatch(addTodo.success(mutatedTodo));
  } catch (err) {
    // Catch the err
    dispatch(addTodo.failure(err.toString()));
  }
};

export const removeTodo = createAction(
  'todo/REMOVE',
  resolve => (id: number) => resolve(id)
);

export const toggleComplete = createAction(
  'todo/TOGGLE_COMPLETE',
  resolve => (id: number) => resolve(id)
);
