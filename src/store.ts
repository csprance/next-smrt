import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import { rootReducer } from './redux';
import { RootAction, RootState } from './redux/redux-types';

export const initializeStore = (
  initialState: RootState | undefined = undefined
) => {
  // Add any middlewares here
  const middlewares = [thunk as ThunkMiddleware<RootState, RootAction>];

  // Add any dev only middlewares here
  if (process.env.NODE_ENV !== `production`) {
    middlewares.push(createLogger());
  }

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};
