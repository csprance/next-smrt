import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store';
import initialState from './state';
import { Todo } from './types';
import { doSomethingAsync } from './utils';

export const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.push(action.payload);
    },
    removeTodo(state, action: PayloadAction<number>) {
      return state.filter((t) => t.id !== action.payload);
    },
    toggleComplete(state, action: PayloadAction<number>) {
      for (const todo of state) {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      }
    },
  },
});

export const { addTodo, removeTodo, toggleComplete } = slice.actions;

export default slice.reducer;

export const addTodoThunk = (todo: Todo): AppThunk => async (dispatch) => {
  try {
    const mutatedTodo = await doSomethingAsync(todo);
    dispatch(addTodo(mutatedTodo));
  } catch (err) {
    // Log an error here
  }
};
