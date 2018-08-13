import { ActionType, getType } from 'typesafe-actions';
import * as todoActions from './todo-actions';
import { default as defaultState } from './todo-state';
import { TodoState as _TodoState } from './todo-types';

export type TodoState = _TodoState;
export type DbActions = ActionType<typeof todoActions>;

export const reducer = (
  state: TodoState = defaultState,
  action: DbActions
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
        if (todo.id === action.payload){
          todo.completed = !todo.completed;
        }
        return todo;
      });
    default:
      return state;
  }
};
