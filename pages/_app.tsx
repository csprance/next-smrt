import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App, { AppInitialProps, AppContext } from 'next/app';
import * as React from 'react';

import { wrapper } from '../src/store';
import { SweetAlertSyle } from '../styles/GlobalStyles';
import { theme } from '../styles/styles';

class MyApp extends App<AppInitialProps> {
  // This is for redux
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    // ctx.store.dispatch({type: 'TOE', payload: 'was set in _app'});

    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        // Some custom thing for all pages
        pathname: ctx.pathname,
      },
    };
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SweetAlertSyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default wrapper.withRedux(MyApp);
