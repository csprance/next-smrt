import * as React from 'react';
import { Store } from 'redux';
import { getStore } from '../src/store';
import { RootState } from '../src/redux';


interface Props {
  state: RootState;
  server: boolean;
  url: {
    back();
    pathname: string;
    push(url, as);
    pushTo(href, as);
    query: any;
    replace(url, as);
    replaceTo(href, as);
  };
}
export class StaticPage<S> extends React.Component<Props, S> {
  protected store: Store<RootState>;

  static async getInitialProps({ req }) {
    const server = !!req;
    const store = getStore(undefined, server);
    const state = store.getState();
    return {
      state,
      server
    };
  }


  constructor(props) {
    super(props);
    this.store = getStore(props.initialState, props.server);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }


  render() {
    console.warn('must override render()');
    return null;
  }
}
