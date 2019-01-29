// All the types associated with the state from the db
import { ActionType } from 'typesafe-actions';

import { actions } from '../todo';

export type Todo = {
  id: number;
  completed: boolean;
  todoText: string;
};

export type State = Todo[];

export type TodoActions = ActionType<typeof actions>;
