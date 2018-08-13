import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

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

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { statusCode } = this.props;
    return (
      <FlexCenter>
        <Head>
          <title>Error</title>
        </Head>
        <h1>{statusCode}</h1>
      </FlexCenter>
    );
  }
}
export default ErrorPage;
