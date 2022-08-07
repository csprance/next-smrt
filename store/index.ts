import create, { StoreApi, UseBoundStore } from 'zustand';
import createContext from 'zustand/context';
import { combine } from 'zustand/middleware';

import { getCookieState } from '../lib/cookie-persist';
import defaultTodos from './todo/state';
import { Todo } from './todo/types';
import { generateNewID } from './todo/utils';

let store: StoreApi<MyStore>;

export const STATE_KEY = 'next-smrt-cookie-state';

export const getDefaultInitialState: () => State = () => {
  console.log('Getting Default Initial State');
  return {
    todos: defaultTodos,
  };
};

export const initializeStore = (preloadedState: State) => {
  const cookieState = getCookieState<State>(preloadedState);
  return create<MyStore>()(
    combine({ ...cookieState }, (set, get) => ({
      addTodo: (text) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              text,
              completed: false,
              id: generateNewID(state.todos),
            },
          ],
        })),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((t) => t.id !== id),
        })),
      toggleComplete: (id) =>
        set((state) => ({
          todos: state.todos.map((t) => ({
            ...t,
            completed: t.id === id ? !t.completed : t.completed,
          })),
        })),
    })),
  );
};
export interface State {
  todos: Todo[];
}

export interface Actions {
  addTodo: (todoText: string) => void;
  removeTodo: (id: number) => void;
  toggleComplete: (id: number) => void;
}

export type MyStore = State & Actions;

type InitialState = ReturnType<typeof getDefaultInitialState>;

type UseStoreState = typeof initializeStore extends (
  ...args: never
) => UseBoundStore<infer T>
  ? T
  : never;

export const { Provider, useStoreApi, useStore } =
  createContext<UseStoreState>();

export const useCreateStore = (serverInitialState: InitialState) => {
  // For SSR & SSG, always use a new store.
  if (typeof window === 'undefined') {
    return () => initializeStore(serverInitialState);
  }

  // For CSR, always re-use same store.
  store = store ?? initializeStore({ ...serverInitialState });

  return () => store;
};
