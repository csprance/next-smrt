// The Default state for the db
import { TodoState } from './todo-types';

export default [
  {
    id: 0,
    todoText: 'Clone Next-SMRT Repository',
    dateAdded: new Date(),
    expires: false,
    completed: true
  },
  {
    id: 1,
    todoText: 'Run NPM Install',
    dateAdded: new Date(),
    expires: false,
    completed: true
  },
  {
    id: 2,
    todoText: 'Run The example',
    dateAdded: new Date(),
    expires: false,
    completed: true
  },
  {
    id: 3,
    todoText: 'Check out src/redux/index.ts for the redux configuration',
    dateAdded: new Date(),
    expires: false,
    completed: false
  },
  {
    id: 4,
    todoText: 'Delete the src/redux/todo folder',
    dateAdded: new Date(),
    expires: false,
    completed: false
  },
  {
    id: 5,
    todoText: 'Hack it in to your own boilerplate',
    dateAdded: new Date(),
    expires: false,
    completed: false
  },
] as TodoState;
