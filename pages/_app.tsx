import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App, { Container } from 'next/app';
import * as React from 'react';
import { Provider } from 'react-redux';

import withReduxStore from '../src/lib/with-redux-store';
import { SweetAlertSyle } from '../styles/GlobalStyles';
import { theme } from '../styles/styles';

class MyApp extends App {
  // This is for redux
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { props } = this as any;
    const { Component, pageProps, reduxStore } = props;
    return (
      <Container>
        <Provider store={reduxStore}>
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

export default withReduxStore(MyApp);
