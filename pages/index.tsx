import { NextContext } from 'next';
import * as React from 'react';

import HomePage from '../src/containers/HomePage';

type Props = {
  gipData: string;
};
export class IndexPage extends React.Component<Props> {
  static async getInitialProps({  }: NextContext) {
    return {
      gipData: 'Data from getInitialProps of IndexPage'
    };
  }

  componentDidMount() {
    console.log(this.props.gipData);
  }

  render() {
    return <HomePage />;
  }
}
export default IndexPage;
