import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import Head from 'next/head';
import * as React from 'react';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { wrapper } from '../src/store';
import { SweetAlertSyle } from '../styles/GlobalStyles';
import { theme } from '../styles/styles';

const App = wrapper.withRedux(({ Component, pageProps }: any) => {
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
});

export default App;
