import * as React from 'react';
import styled from 'styled-components';
import { white } from '../../../styles/colors';

const Wrapper = styled.div`
  display: flex;
`;

type Props = {
  fill?: string;
  width?: string;
  height?: string;
};
type State = {};
class RetweetIcon extends React.Component<Props, State> {
  static defaultProps = {
    fill: white,
    width: '28px',
    height: '28px'
  };

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1"
        viewBox="0 0 96 96"
        height={this.props.height}
        width={this.props.width}
        fill={this.props.fill}
      >
        <path d="M95 57l-1-2h-7V21l-2-2H27a2 2 0 0 0-2 3l8 9 1 1h40v23h-7a2 2 0 0 0-2 4l14 16a2 2 0 0 0 3 0l13-16v-2zm-32 8l-2-1H22V40h7a2 2 0 0 0 1-3L17 21a2 2 0 0 0-3 0L0 37a2 2 0 0 0 2 3h7v35l2 2h58a2 2 0 0 0 1-3l-7-9z" />
      </svg>
    );
  }
}

export default RetweetIcon;
