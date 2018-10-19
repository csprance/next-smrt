import { getType } from 'typesafe-actions';

import * as todoActions from './actions';
import { default as defaultState } from './state';
import { TodoState } from './index';
import { TodoActions } from './types';

export default (
  state: TodoState = defaultState,
  action: TodoActions
): TodoState => {
  switch (action.type) {
    case getType(todoActions.addTodo.request):
      return state;
    case getType(todoActions.addTodo.success):
      return [].concat(state, action.payload);
    case getType(todoActions.addTodo.failure):
      return state;
    case getType(todoActions.removeTodo):
      return state.filter(todo => todo.id === action.payload);
    case getType(todoActions.toggleComplete):
      return state.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    default:
      return state;
  }
};
