import { Todo } from './types';

export const defaultTodos: Todo[] = [
  {
    id: Date.now() + 0,
    text: 'Clone Next-SMRT Repository',
    completed: true,
  },
  {
    id: Date.now() + 1,
    text: 'Run NPM Install',
    completed: true,
  },
  {
    id: Date.now() + 2,
    text: 'Run The example',
    completed: true,
  },
  {
    id: Date.now() + 3,
    text: 'Check out src/redux/index.ts for the redux configuration',
    completed: false,
  },
  {
    id: Date.now() + 4,
    text: 'Delete the src/redux/todo folder',
    completed: false,
  },
  {
    id: Date.now() + 5,
    text: 'Hack it in to your own boilerplate',
    completed: false,
  },
];

export default defaultTodos;
