import { NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';

import Layout from '../src/components/Layout';

type Props = {
  gipData: string;
};
export const AboutPage: NextPage<Props> = ({ gipData }) => {
  return (
    <Layout>
      <Head>
        <title>Next-SMRT About</title>
      </Head>
      Here could be a cool about page - {gipData}
    </Layout>
  );
};
AboutPage.getInitialProps = async ({ req, res }) => {
  if (req && res) {
    console.log('Runs only on server');
  }
  if (!req && !res) {
    console.log('Runs on the server once and the client once each visit');
  }

  return {
    gipData: 'With Data from getInitialProps'
  };
};
export default AboutPage;
