import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';

import { Layout } from '../src/components/Layout';
import ContentBox from '../src/components/ContentBox';
import Button from '../src/components/Button';

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

class ErrorPage extends React.Component<{ statusCode: number }> {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }
  render() {
    return (
      <Layout>
        <Head>
          <title>Miscreated - Error</title>
        </Head>
        <ContentBox title={'Error'}>
          <FlexCenter>
            <img
              src="/static/404.png"
              alt=""
              style={{ maxWidth: '100%', paddingTop: '25px' }}
            />
            <h1>{this.props.statusCode}</h1>
            <p style={{ paddingBottom: '25px' }}>
              We've dispatched the gnomes to take care of it.
            </p>
            <Link href={'/'}>
              <Button>Go Home</Button>
            </Link>
            <p style={{ paddingBottom: '25px' }} />
          </FlexCenter>
        </ContentBox>
      </Layout>
    );
  }
}
export default ErrorPage;
