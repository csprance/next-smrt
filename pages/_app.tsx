import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';

import CookiePersistWrapper from '../components/CookiePersist';
import { Provider, State, useCreateStore } from '../store';
import { GlobalStyles } from '../styles/GlobalStyles';
import { theme } from '../styles/styles';

type AppOwnProps = { pageProps: { state?: State } };

const MyApp = ({ Component, pageProps }: AppProps & AppOwnProps) => {
  const createStore = useCreateStore(pageProps.state);

  return (
    <Provider createStore={createStore}>
      <CookiePersistWrapper>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
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
      </CookiePersistWrapper>
    </Provider>
  );
};

export default MyApp;
