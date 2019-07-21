import NextApp from 'next/app';
import * as React from 'react';
import { Store } from 'redux';

import { RootAction, RootState } from '../redux/redux-types';
import { initializeStore } from '../store';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState: RootState | undefined) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState, isServer);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!(window as any)[__NEXT_REDUX_STORE__]) {
    (window as any)[__NEXT_REDUX_STORE__] = initializeStore(
      initialState,
      isServer
    );
  }
  return (window as any)[__NEXT_REDUX_STORE__];
}

export default (App: typeof NextApp) => {
  return class AppWithRedux extends React.Component<{}, {}> {
    public static async getInitialProps(appContext: any) {
      // Fetch initial app state for the server side here

      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore(undefined);

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      };
    }
    props: any;
    reduxStore: Store<RootState, RootAction>;

    constructor(props: any) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};
