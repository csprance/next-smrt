import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import Head from 'next/head';
import nookie from 'nookies';
import * as React from 'react';

import CookiePersistWrapper from '../components/CookiePersist';
import {
  Provider,
  STATE_KEY,
  State,
  getDefaultInitialState,
  useCreateStore,
} from '../store';
import { GlobalStyles } from '../styles/GlobalStyles';
import { theme } from '../styles/styles';

type AppOwnProps = { state: State };

const MyApp = ({ Component, pageProps, state }: AppProps & AppOwnProps) => {
  const createStore = useCreateStore(state);
  console.log('MyApp State: ', state);
  console.log('MyApp pageProps: ', pageProps);

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

MyApp.getInitialProps = async (
  context: AppContext,
): Promise<AppOwnProps & AppInitialProps> => {
  console.log('Getting initial App Props');
  const cookieState = nookie.get(context.ctx);
  if (STATE_KEY in cookieState) {
    const state: State = JSON.parse(cookieState[STATE_KEY]);
    console.log('State Exists: Return Cookie State: ', state);
    return {
      pageProps: {},
      state,
    };
  }
  const state = getDefaultInitialState();
  console.log('No Cookie State Creating Default State: ', state);
  return {
    pageProps: {},
    state,
  };
};

export default MyApp;
