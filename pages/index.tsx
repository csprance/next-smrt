import { GetServerSideProps } from 'next';
import * as React from 'react';

import HomePage from '../components/HomePage';
import Layout from '../components/Layout';
import { getCookieProps } from '../lib/cookie-persist';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { state: getCookieProps(context) },
  };
};

function Index() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export default Index;
