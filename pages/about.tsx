import { NextFunctionComponent } from 'next';
import Head from 'next/head';
import * as React from 'react';

type Props = {
  gipData: string;
};
export const AboutPage: NextFunctionComponent<Props> = ({ gipData }) => {
  return (
    <div>
      <Head>
        <title>Next-SMRT About</title>
      </Head>
      Here could be a cool about page - {gipData}
    </div>
  );
};
AboutPage.getInitialProps = async ({ req, res }) => {
  if (req && res) {
    console.log('Runs only on server');
  }
  if (!req && !res) {
    console.log('on The server once and the client one each visit');
  }

  return {
    gipData: 'With Data from getInitialProps'
  };
};
export default AboutPage;
