import { getType } from 'typesafe-actions';

import { actions, Types } from '../todo';

export default (
  state: Types.State = [],
  action: Types.TodoActions
): Types.State => {
  switch (action.type) {
    case getType(actions.hydrateTodosFromDB.success):
      return [...action.payload];

    case getType(actions.addTodo.success):
      return [...action.payload];

    case getType(actions.removeTodo.success):
      return [...action.payload];

    case getType(actions.toggleTodo.success):
      return [...action.payload];

    default:
      return state;
  }
};
