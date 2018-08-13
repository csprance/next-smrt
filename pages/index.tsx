import * as React from 'react';
import { Provider } from 'react-redux';
import { withStyles } from '@material-ui/core';

import { StaticPage } from './_page';
import HomePage from '../src/containers/HomePage';

const styles = {};

export class Index extends StaticPage<{}> {
  render() {
    return (
      <Provider store={this.store}>
        <HomePage />
      </Provider>
    );
  }
}
export default withStyles(styles)(Index);
