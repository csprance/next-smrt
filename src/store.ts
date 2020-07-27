import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';

import rootReducer, { RootState } from './redux';

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
// create a makeStore function
const makeStore: MakeStore<RootState> = (context: Context) => store;

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, { debug: true });

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
