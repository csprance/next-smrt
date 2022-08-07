// Add the todo in to the database
import { Todo } from './types';

export const generateNewID = (todos: Todo[]): number => {
  const ids = todos.map((todo) => todo.id);
  return Date.now();
};

export function filterObjectByKeys(raw: object, blacklist: string[]) {
  return Object.fromEntries(
    Object.entries(raw).filter(([key, val]) => !blacklist.includes(key)),
  );
}
