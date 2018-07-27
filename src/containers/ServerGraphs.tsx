import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { media } from '../../styles/styles';
import { RootState } from '../redux';

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  margin-bottom: 35px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 800px;
  width: 100%;
  ${media.tablet`
      flex-direction: column;
  `};
`;

type Props = {};
type State = {};
class ServerGraphs extends React.Component<Props, State> {
  static defaultProps = {};
  state = {};

  render() {
    return (
      <Wrapper>
        <Column>Server Graphs Go Here</Column>
      </Wrapper>
    );
  }
}

export default connect((store: RootState) => ({}))(ServerGraphs);
