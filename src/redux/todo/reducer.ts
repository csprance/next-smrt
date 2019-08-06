import { getType } from 'typesafe-actions';

import { actions, defaultState, Types } from '../todo';

export default (
  state: Types.State = defaultState,
  action: Types.TodoActions
): Types.State => {
  switch (action.type) {
    case getType(actions.addTodo.success):
      return [...state, action.payload];

    case getType(actions.removeTodo):
      return state.filter(todo => todo.id !== action.payload);

    case getType(actions.toggleComplete):
      return state.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return {...todo};
      });

    default:
      return state;
  }
};
