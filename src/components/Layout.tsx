import * as React from 'react';
import { injectGlobal, default as styled } from 'styled-components';
import Head from 'next/head';
import { media } from '../../styles/styles';

injectGlobal`
  #__next {
    width: 100%;
  }
  html, body {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  body {
    font-family: 'Oswald', serif;
    font-size: 1em;
    display: flex;
    flex-grow: 1;
  }
  a {
    text-decoration: none !important;
    color: inherit !important;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
`;
const Main = styled.main`
  flex-grow: 1;
  height: 100%;
  width: 100%;
  justify-content: center;
  display: flex;
`;
const MainWrapper = styled.div`
  width: 100%;
`;

export class Layout extends React.Component<{}, {}> {
  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <Main>
          <MainWrapper>{children}</MainWrapper>
        </Main>
      </Wrapper>
    );
  }
}
