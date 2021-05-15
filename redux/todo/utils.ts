// Add the todo in to the database
import { Todo } from './types';

export const doSomethingAsync = async (todo: Todo): Promise<Todo> => {
  // Do something async here
  return { ...todo };
};
