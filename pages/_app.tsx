import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App, { Container } from 'next/app';
import * as React from 'react';
import { Provider } from 'react-redux';

import withReduxStore from '../src/lib/with-redux-store';
import '../styles/fix-next-link.css'; // FIXME: https://github.com/zeit/next-plugins/issues/282
import { SweetAlertSyle } from '../styles/GlobalStyles';
import { theme } from '../styles/styles';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  state = {
    ready: false
  };

  componentDidMount() {
    // FIXME: https://github.com/styled-components/styled-components/issues/1860
    this.setState({
      ready: true
    });
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode!.removeChild(jssStyles);
    }
  }

  render() {
    const { props } = this as any;
    const { Component, pageProps, reduxStore } = props;
    return (
      <Container>
        {!this.state.ready && <div className="fouc" />}
        <Provider store={reduxStore}>
          {/* Material-UI Theme Provider */}
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/*Optional Sweet Alert Styles */}
            <SweetAlertSyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
        <style jsx global>{`
          .fouc + * {
            visibility: hidden !important;
          }
        `}</style>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
