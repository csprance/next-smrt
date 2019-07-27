import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import withRedux from 'next-redux-wrapper';
import App, { AppContext, Container } from 'next/app';
import * as React from 'react';
import { Provider } from 'react-redux';

import { initializeStore } from '../src/store';
import { SweetAlertSyle } from '../styles/GlobalStyles';
import { theme } from '../styles/styles';

class MyApp extends App {
  // This is for redux
  static async getInitialProps({ Component, ctx }: AppContext) {
    if ((ctx as any).isServer) {
      // Runs once per connection only on the server. Good place to get initial state for the site
      // ctx.store.dispatch({ type: 'FOO', payload: 'foo' });
    }
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { props } = this as any;
    const { Component, pageProps, store } = props;
    return (
      <Container>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <SweetAlertSyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initializeStore)(MyApp);
