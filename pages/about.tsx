import Box from '@material-ui/core/Box';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';

import Layout from '../components/Layout';

interface Props {
  joke: string;
}
export const AboutPage: NextPage<Props> = ({ joke }) => {
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
          Next.js, Styled Components, Material-UI, Redux (With Redux-Toolkit),
          Typescript
        </h2>

        <p>
          A lot of the next.js examples have some of those features but not all
          together. So I decided to roll them all into one boilerplate.
        </p>

        <p>
          I use it to kickstart everything I do now. Works great in production
          and comes with docker batteries included.
        </p>

        <p>Random Chuck Joke: {joke}</p>

        <p>
          Made with 💗 by <a href="https://csprance.com">@csprance</a>
        </p>
      </Box>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  // This joke will be baked in to the static page and then rebaked every 30 seconds if visited
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const joke = await response.json();
    return {
      props: {
        joke: joke.value,
      },
      revalidate: 30
    };
  } catch (e) {
    return {
      props: {
        joke: 'Error Fetching a cool Chuck Joke Sorry.',
      },
      revalidate: 30
    };
  }
};

export default AboutPage;
