import { Dispatch } from 'redux';
import { createAsyncAction, createAction } from 'typesafe-actions';
import { RootState } from '../index';
import { addToDb } from './todo-helpers';
import { Todo } from './todo-types';

export const addTodo = createAsyncAction(
  'todo/REQUEST',
  'todo/SUCCESS',
  'todo/FAILED'
)<void, any[], string>();

export const addTodoFlow = async (
  todo: Todo,
  dispatch: Dispatch<RootState>
): Promise<void> => {
  // Tell Redux were requesting data from the db
  dispatch(addTodo.request());
  try {
    // Do the actual request
    dispatch(addTodo.success(await addToDb(todo)));
  } catch (err) {
    // Catch the err
    addTodo.failure(err.toString());
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