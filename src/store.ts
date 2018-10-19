import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import { reducer } from './redux';
import { RootAction, RootState } from './redux/redux-types';

export const initializeStore = (initialState: RootState = undefined) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk as ThunkMiddleware<RootState, RootAction>,
        createLogger()
      )
    )
  );
};
