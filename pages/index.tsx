import * as React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core';

import { StaticPage } from './_page';
import { media } from '../styles/styles';

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  ${media.desktop`
    flex-direction: column;
  `};
`;

const styles = () => ({
  root: {}
});

export class Index extends StaticPage<{}> {
  render() {
    return (
      <Provider store={this.store}>
        <Wrapper>Next-SMRT</Wrapper>
      </Provider>
    );
  }
}
export default withStyles(styles)(Index);
