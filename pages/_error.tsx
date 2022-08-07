import { NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ErrorPage: NextPage<{
  statusCode: number;
}> = ({ statusCode }) => {
  return (
    <Layout>
      <FlexCenter>
        <Head>
          <title>Error</title>
        </Head>
        <h1>{statusCode}</h1>
      </FlexCenter>
    </Layout>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = Number(res ? res.statusCode : err ? err.statusCode : 404);
  return { statusCode };
};

export default ErrorPage;
