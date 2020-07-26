import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from './state';
import { Todo } from './types';
import { doSomethingAsync } from './utils';
import {AppThunk} from "../../store";

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.push(action.payload);
    },
    removeTodo(state, action: PayloadAction<number>) {
      return state.filter((t) => t.id === action.payload);
    },
    toggleComplete(state, action: PayloadAction<number>) {
      for (const draft of state) {
        if (draft.id === action.payload) {
          draft.completed = true;
        }
      }
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;

export const addTodoThunk = (todo: Todo): AppThunk => async (dispatch) => {
  try {
    const mutatedTodo = await doSomethingAsync(todo);
    dispatch(addTodo(mutatedTodo));
  } catch (err) {
    dispatch(getRepoDetailsFailed(err.toString()));
  }
};
