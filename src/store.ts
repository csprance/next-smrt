import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import { rootReducer } from './redux';
import { RootAction, RootState } from './redux/redux-types';

export const initializeStore = (
  initialState: RootState | undefined = undefined,
  isServer: boolean
) => {
  // Add any middlewares here
  const middlewares = [thunk as ThunkMiddleware<RootState, RootAction>];
  // Add any dev only middlewares here
  const devMiddlewares = [createLogger()];

  if (isServer) {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middlewares)
    );
  } else {
    const { persistReducer, persistStore } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;
    if (process.env.NODE_ENV !== `production`) {
      devMiddlewares.forEach(mw => {
        middlewares.push(mw);
      });
    }
    const persistConfig = {
      key: '3.0.0',
      storage
    };
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = createStore(
      persistedReducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middlewares))
    );
    // TODO HACK?
    (store as any).__persistor = persistStore(store);

    return store;
  }
};
