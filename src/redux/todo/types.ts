// All the types associated with the state from the db
import { ActionType } from 'typesafe-actions';
import * as todoActions from './actions';

export type Todo = {
  id: number;
  completed: boolean;
  todoText: string;
};
export type TodoState = Todo[];

export type TodoActions = ActionType<typeof todoActions>;
