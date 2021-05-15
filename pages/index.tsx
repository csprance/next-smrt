import { NextPageContext } from 'next';
import * as React from 'react';

import Layout from '../components/Layout';
import HomePageContainer from '../containers/HomePageContainer';

interface Props {
  gipData: string;
}
export class IndexPage extends React.Component<Props> {
  static async getInitialProps(ctx: NextPageContext) {
    console.log(ctx.store);
    return {
      gipData: 'Data from getInitialProps of IndexPage',
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
