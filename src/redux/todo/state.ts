// The Default state for the db
import { TodoState } from './todo-types';

export default [
  {
    id: 0,
    todoText: 'Clone Next-SMRT Repository',
    completed: true
  },
  {
    id: 1,
    todoText: 'Run NPM Install',
    completed: true
  },
  {
    id: 2,
    todoText: 'Run The example',
    completed: true
  },
  {
    id: 3,
    todoText: 'Check out src/redux/index.ts for the redux configuration',
    completed: false
  },
  {
    id: 4,
    todoText: 'Delete the src/redux/todo folder',
    completed: false
  },
  {
    id: 5,
    todoText: 'Hack it in to your own boilerplate',
    completed: false
  },
] as TodoState;
