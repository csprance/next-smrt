import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import * as React from 'react';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { wrapper } from '../src/store';
import { SweetAlertSyle } from '../styles/GlobalStyles';
import { theme } from '../styles/styles';

const App = wrapper.withRedux(({ Component, pageProps }) => {
  const store = useStore();

  return (
    <PersistGate
      persistor={(store as any).__persistor}
      loading={<div>Loading</div>}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SweetAlertSyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </PersistGate>
  );
});

export default App;
