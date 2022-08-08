import { useLayoutEffect } from 'react';
import create, { StoreApi, UseBoundStore } from 'zustand';
import createContext from 'zustand/context';
import { devtools } from 'zustand/middleware';

import defaultTodos from './todo/state';
import { Todo } from './todo/types';
import { generateNewID } from './todo/utils';

let store: StoreApi<MyStore>;

export const STATE_KEY = 'next-smrt-cookie-state';

export const getDefaultInitialState: () => State = () => ({
  todos: defaultTodos,
});

export const initializeStore = (preloadedState: State | undefined) => {
  console.log('initializeStore');
  return create<MyStore>()(
    devtools((set, get) => ({
      ...getDefaultInitialState(),
      ...preloadedState,
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

/**
 * Does the logic to determine if we should create a new store or reuse the existing one
 * @param serverInitialState InitialState for the server or undefined
 */
export const useCreateStore = (
  serverInitialState: InitialState | undefined,
) => {
  // For SSR & SSG, always use a new store.
  if (typeof window === 'undefined') {
    return () => initializeStore(serverInitialState);
  }
  const isReusingStore = Boolean(store);
  // For CSR, always re-use same store.
  store = store ?? initializeStore(serverInitialState);

  // And if initialState changes, then merge states in the next render cycle.
  //
  // eslint complaining "React Hooks must be called in the exact same order in every component render"
  // is ignorable as this code runs in same order in a given environment
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    // serverInitialState is undefined for CSR pages. It is up to you if you want to reset
    // states on CSR page navigation or not. I have chosen not to, but if you choose to,
    // then add `serverInitialState = getDefaultInitialState()` here.
    if (serverInitialState && isReusingStore) {
      store.setState(
        {
          // re-use functions from existing store
          ...store.getState(),
          // but reset all other properties.
          ...serverInitialState,
        },
        true, // replace states, rather than shallow merging
      );
    }
  });

  return () => store;
};
