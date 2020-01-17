import { NextPageContext } from 'next';
import * as React from 'react';

import Layout from '../src/components/Layout';
import HomePageContainer from '../src/containers/HomePageContainer';

interface Props {
  gipData: string;
}
export class IndexPage extends React.Component<Props> {
  static async getInitialProps({  }: NextPageContext) {
    return {
      gipData: 'Data from getInitialProps of IndexPage'
    };
  }

  componentDidMount() {
    console.log(this.props.gipData);
  }

  render() {
    return (
      <Layout>
        <HomePageContainer />
      </Layout>
    );
  }
}

export default IndexPage;
