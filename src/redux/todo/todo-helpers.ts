// Add the todo in to the database
import { Todo } from './todo-types';

export const addToDb = async (todo: Todo): Promise<any[]> => {
  return await [todo];
};
