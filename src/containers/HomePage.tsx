import * as React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { media } from '../../styles/styles';
import { RootState } from '../redux';
import { DbState } from '../redux/db';
import { queryDbFlow } from '../redux/db/db-actions';

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

type Props = {
  db: DbState;
  queryDb: (query: string) => Promise<void>;
};
type State = {};
class HomePage extends React.Component<Props, State> {
  static defaultProps = {};
  state = {};

  handleButtonClick = () => {
    this.props.queryDb('SELECT * FROM perf_mon');
  };

  render() {
    return (
      <Wrapper>
        <Column>
          <Button onClick={this.handleButtonClick}>Click Me</Button>
          {JSON.stringify(this.props.db.results)}
        </Column>
      </Wrapper>
    );
  }
}

export default connect(
  (store: RootState) => ({
    db: store.db
  }),
  dispatch => ({
    queryDb: (query: string) => queryDbFlow(query, dispatch)
  })
)(HomePage);
