import { Todo } from './types';

export const defaultTodos: Todo[] = [
  {
    id: 1,
    text: 'Clone Next-SMRT Repository',
    completed: true,
  },
  {
    id: 2,
    text: 'Run NPM Install',
    completed: true,
  },
  {
    id: 3,
    text: 'Run The example',
    completed: true,
  },
  {
    id: 4,
    text: 'Check out src/redux/index.ts for the redux configuration',
    completed: false,
  },
  {
    id: 5,
    text: 'Delete the src/redux/todo folder',
    completed: false,
  },
  {
    id: 6,
    text: 'Hack it in to your own boilerplate',
    completed: false,
  },
];

export default defaultTodos;
