import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { wrapper } from '../store';
import { SweetAlertSyle } from '../styles/GlobalStyles';
import { theme } from '../styles/styles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore();
  return (
    <PersistGate
      persistor={(store as any).__persistor} // This is pretty hacky but recommended by next-redux-wrapper
      loading={<div>Loading</div>}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SweetAlertSyle />
        <Head>
          <title>Next-Smrt</title>
          <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </PersistGate>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default wrapper.withRedux(MyApp);
