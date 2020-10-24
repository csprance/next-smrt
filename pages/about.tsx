import Box from '@material-ui/core/Box';
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
      <Box
        width={'100%'}
        flexGrow={1}
        flexDirection={'column'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        style={{ padding: 10, textAlign: 'center' }}
      >
        <img
          style={{ maxWidth: '100%' }}
          src="/static/site-image.png"
          alt="next-smrt-logo"
        />
        <h1>Next-SMRT</h1>
        <h2>
          Next.js, Styled Components, Material-UI, Redux (With
          Redux-Toolkit), Typescript
        </h2>

        <p>
          A lot of the next.js examples have some of those features but not all
          together. So I decided to roll them all into one boilerplate.
        </p>

        <p>
          I use it to kickstart everything I do now. Works great in production
          and comes with docker batteries included.
        </p>

        <p>Random Chuck Joke: {gipData}</p>

        <p>
          Made with 💗 by <a href="https://csprance.com">@csprance</a>
        </p>
      </Box>
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
  // The data will fetch either on the client or the server server
  // on first page visit or reload and client when using links
  try {
    const response  = await fetch('https://api.chucknorris.io/jokes/random');
    const joke = await response.json();
    return {
      gipData: joke.value,
    };
  } catch (e) {
    return {
      gipData: 'Error Fetching a cool Chuck Joke Sorry.',
    };
  }
};
export default AboutPage;
