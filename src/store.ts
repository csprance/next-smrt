import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { reducer, RootState } from './redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const initializeStore = (initialState: RootState = undefined) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk, createLogger()))
  );
};
