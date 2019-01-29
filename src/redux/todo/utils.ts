import store from 'store';

import { defaultState } from './index';
import { Todo } from './types';

export const bootStrapTodoDb = () => {
  if (!store.get('todo')) {
    store.set('todo', defaultState);
  }
};

export const getTodosFromDb = (): Todo[] => store.get('todo');

export const addTodoToDb = (todo: Todo) => {
  const todos = store.get('todo');
  store.set('todo', [...todos, todo]);
};

export const removeTodoFromDb = (id: number) => {
  const todos = getTodosFromDb();
  store.set('todo', [...todos.filter(todo => todo.id !== id)]);
};

export const toggleTodoInDb = (id: number) => {
  const todos = getTodosFromDb();
  store.set(
    'todo',
    todos.map(todo => ({
      ...todo,
      completed: todo.id === id ? !todo.completed : todo.completed
    }))
  );
};
