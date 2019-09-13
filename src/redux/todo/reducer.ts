import { createReducer } from 'typesafe-actions';

import { actions } from '../todo';
import defaultState from './state';

export default createReducer(defaultState)
  .handleAction(actions.addTodo.success, (state, action) => [
    ...state,
    action.payload
  ])
  .handleAction(actions.removeTodo, (state, action) =>
    state.filter(todo => todo.id !== action.payload)
  )
  .handleAction(actions.toggleComplete, (state, action) =>
    state.map(todo => {
      if (todo.id === action.payload) {
        todo.completed = !todo.completed;
      }
      return { ...todo };
    })
  );
