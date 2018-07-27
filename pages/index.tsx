import * as React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { Provider } from 'react-redux';

import { Layout } from '../src/components/Layout';
import { StaticPage } from './_page';
import { media } from '../styles/styles';
import SideBar from '../src/components/SideBar';
import { withStyles } from '@material-ui/core';

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  ${media.desktop`
    flex-direction: column;
  `};
`;

const styles = theme => ({
  root: {}
});

export class Index extends StaticPage<{}> {
  render() {
    return (
      <Provider store={this.store}>
        <Layout>
          <Head>
            <title>EiBot Control Panel</title>
          </Head>
          <Wrapper>
            <SideBar />
            <div>ViewPane</div>
          </Wrapper>
        </Layout>
      </Provider>
    );
  }
}
export default withStyles(styles)(Index);
