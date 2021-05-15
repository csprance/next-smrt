// All the types associated with the state from the db

export type Todo = {
  id: number;
  completed: boolean;
  todoText: string;
};

export type State = Todo[];
